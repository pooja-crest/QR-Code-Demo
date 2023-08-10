<?php

namespace App\Jobs;

use App\Mail\MissingFilesEmail;
use App\Mail\ResetPasswordEmail;
use App\Mail\ReturnMail;
use App\Mail\UserRegistrationApprovalEmail;
use App\Mail\UserRegistrationEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmail implements ShouldQueue
{
	use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

	protected $params;

	public function __construct($params)
	{
		$this->params = $params;
	}

	public function handle()
	{
		try {
			switch ($this->params['type']) {
				case 'missing_files':
					Mail::to(['arya.bawanta@yahoo.com', 'brandon@elcolighting.com'])->send(new MissingFilesEmail($this->params));
					break;
				case 'user_registration':
					Mail::to(['ar@elcolighting.com', 'brandon@elcolighting.com'])->send(new UserRegistrationEmail($this->params['data']));
					break;
				case 'user_registration_approval':
					Mail::to([$this->params['data']['code'], 'ar@elcolighting.com'])->send(new UserRegistrationApprovalEmail($this->params['data']));
					break;
				case 'forgot_password':
					Mail::to([$this->params['user']['code']])->send(new ResetPasswordEmail($this->params['data']));
					break;
				case 'return':
					Mail::to($this->params['emails'])->send(new ReturnMail($this->params['data']));
					break;
			}
			echo "Send " . $this->params['type'] . " email done\n";
		} catch (\Exception $ex) {
			echo $ex->getMessage() . "\n";
			return $ex;
		}
	}
}
