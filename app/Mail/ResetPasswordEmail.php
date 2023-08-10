<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        try {
            $email = $this->view('reset_password.email')
                ->from('customerservice@elcolighting.com', 'Customer Service ELCO')
                ->subject("Reset Password Link");
            return $email;
        } catch (\Exception $ex) {
            echo $ex->getMessage() . "\n";
            return $ex;
        }
    }
}
