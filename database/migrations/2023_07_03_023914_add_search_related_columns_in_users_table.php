<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSearchRelatedColumnsInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'code_text')) {
                $table->string('code_text')->after('code')->nullable();
            }
            if (!Schema::hasColumn('users', 'name_text')) {
                $table->string('name_text')->after('name')->nullable();
            }
        });

        $users = \App\Models\User::withTrashed()->get();
        foreach ($users as $user) {
            $codeStr = strtolower(generate_search_string($user->code));
            $nameStr = strtolower(generate_search_string($user->name));
            $user->timestamps = false;
            $user->code_text = !empty($codeStr) ? $codeStr : null;
            $user->name_text = !empty($nameStr) ? $nameStr : null;
            $user->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'code_text')) {
                $table->dropColumn('code_text');
            }
            if (Schema::hasColumn('users', 'name_text')) {
                $table->dropColumn('name_text');
            }
        });
    }
}
