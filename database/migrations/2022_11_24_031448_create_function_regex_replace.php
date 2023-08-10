<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFunctionRegexReplace extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('DROP FUNCTION IF EXISTS `regex_replace`');
        DB::statement("
            
        CREATE FUNCTION `regex_replace`(pattern VARCHAR(1000),replacement VARCHAR(1000),original VARCHAR(1000)) RETURNS VARCHAR(1000) CHARSET utf8mb4
        DETERMINISTIC   
    BEGIN    
        DECLARE temp VARCHAR(1000); 
        DECLARE ch VARCHAR(1); 
        DECLARE i INT;
        SET i = 1;
        SET temp = '';
        IF original REGEXP pattern THEN 
            loop_label: LOOP 
                IF i>CHAR_LENGTH(original) THEN
                    LEAVE loop_label;  
                END IF;
    
                SET ch = SUBSTRING(original,i,1);
    
                IF NOT ch REGEXP pattern THEN
                    SET temp = CONCAT(temp,ch);
                ELSE
                    SET temp = CONCAT(temp,replacement);
                END IF;
    
                SET i=i+1;
            END LOOP;
        ELSE
            SET temp = original;
        END IF;
    
        RETURN temp;
    END
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP FUNCTION IF EXISTS `regex_replace`');
    }
}
