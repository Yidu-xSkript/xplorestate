<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeEstateListController extends Controller
{
    public function index()
    {
        return Inertia::render('Estate/Estate/Index');
    }

    public function indexDetail()
    {
        return Inertia::render('Estate/EstateDetail/Index');
    }
}
