<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegistrationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        try {
            $email = $this->view('user_registration.email')
                ->from('customerservice@elcolighting.com', 'Customer Service ELCO')
                ->subject($this->data['code'] . " - New User Registration");

            return $email;
        } catch (\Exception $ex) {
            echo $ex->getMessage() . "\n";
            return $ex;
        }
    }
}
