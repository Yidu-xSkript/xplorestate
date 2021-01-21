<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AgencyController extends Controller
{
    public function index()
    {
        return Inertia::render('Agency/Index');
    }

    public function detail()
    {
        return Inertia::render("Agency/Detail");
    }
}
