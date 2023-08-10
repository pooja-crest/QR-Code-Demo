<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FtpLog;
use Exception;
use Illuminate\Support\Facades\Storage;

class FtpLogController extends Controller
{
    protected $limit = 100;

    public function index(Request $request)
    {
        $page = 1;
        if ($request->has('page') && !empty($request->page)) {
            $page = $request->page;
        }
        $skip = $this->limit * ($page - 1);
        $response = FtpLog::filter($request->all())->orderBy('id', 'desc')->skip($skip)->take($this->limit)->get();
        return generate_json_response($response, 'Successfully get ftp logs');
    }

    public function download($id)
    {
        $ftp = FtpLog::find($id);
        try {
            $localFilename = preg_replace('/[-:]+/', '', trim($ftp->filename));
            $localFilename = preg_replace('/[ ]+/', 'T', trim($localFilename));
            if (!Storage::exists('sync/' . $localFilename)) {
                throw new Exception("File not exist");
            }
            return Storage::download('sync/' . $localFilename);
        } catch (\Exception $ex) {
            return $ex->getMessage() . ": We're sorry that the file you want to download is unavailable, please contact the Administrator to continue.";
        }
    }
}
