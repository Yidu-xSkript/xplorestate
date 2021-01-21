<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentController extends Controller
{
    public function index()
    {
        return Inertia::render('Agent/Index');
    }

    public function detail()
    {
        return Inertia::render('Agent/Detail');
    }
}
