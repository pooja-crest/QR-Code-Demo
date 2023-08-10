<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MissingFilesEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $params;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($params)
    {
        $this->params = $params;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // $files = $this->params['files'];
        $data = ['files' =>  $this->params['files']];
        $email = $this->view('missing_files.email')
            ->from('customerservice@elcolighting.com', 'Customer Service ELCO')
            ->subject('Orders.elco Missing Files')
            ->with($data);

        return $email;
    }
}
