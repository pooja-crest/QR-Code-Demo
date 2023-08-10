<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegistrationApprovalEmail extends Mailable
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
            $email = $this->view('user_registration_approval.email')
                ->from('customerservice@elcolighting.com', 'Customer Service ELCO')
                ->subject("Portal Website Registration");

            return $email;
        } catch (\Exception $ex) {
            echo $ex->getMessage() . "\n";
            return $ex;
        }
    }
}
