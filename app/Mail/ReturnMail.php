<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReturnMail extends Mailable
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
            $subject = "RGA Request Submission - " . $this->data['code'];
            if (!empty($this->data['created_by_detail'])) $subject .= " Placed by " . $this->data['created_by_detail']['code'];
            $email = $this->view('return.email')
                ->from('customerservice@elcolighting.com', 'Customer Service ELCO')
                ->subject($subject)
                ->attach($this->data['attachment']);
            return $email;
        } catch (\Exception $ex) {
            echo $ex->getMessage() . "\n";
            return $ex;
        }
    }
}
