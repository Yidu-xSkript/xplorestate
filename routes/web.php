<?php

use App\Http\Controllers\AgencyController;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomeEstateListController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/map', [HomeEstateListController::class, 'index'])->name('estate.index');
Route::get('/estate', [HomeEstateListController::class, 'detail'])->name('estate.detail');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/detail', [BlogController::class, 'detail'])->name('blog.detail');
Route::get('/agencies', [AgencyController::class, 'index'])->name('agency.index');
Route::get('/agency/detail', [AgencyController::class, 'detail'])->name('agency.detail');
Route::get('/agents', [AgentController::class, 'index'])->name('agent.index');
Route::get('/agent/detail', [AgentController::class, 'detail'])->name('agent.detail');
Route::get('/sell', function() {
    return Inertia::render('sell/Index');
})->name('sell.index');
Route::get('/affordibility-calculator', function() {
    return Inertia::render('RentAffordibility/Index');
})->name('rent.calculator.index');
