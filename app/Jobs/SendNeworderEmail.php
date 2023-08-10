<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\NeworderMail;
use Mail;

class SendNeworderEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->data['email'] as $email) {
            if ($email == \config('values.cs_email')) {
                $this->data["attachment"][] = storage_path('app/public/neworders/order-' . $this->data['order_code'] . '.csv');
            }
            echo $email . "\n";
            try {
                Mail::to($email)->send(new NeworderMail($this->data));
            } catch (\Exception $ex) {
                echo $ex->getMessage() . "\n";
            }
        }
    }
}
