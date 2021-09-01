<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Todo::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string",
            "completed" => "required|boolean",
            "description" => "required|string",
            "priority" => "required|string"
        ]);
        $todo = Todo::create($data);
        return response($todo, 201);
    }

    public function getBytitle(Request $request, $title)
    {
        return response(Todo::where('title', $title)->first());
    }

    public function getByStatus(Request $request, $complete)
    {
        return response(Todo::where('completed', $complete)->get());
    }

    public function updateComplete(Request $request, Todo $todo)
    {
        $data = $request->validate([
            "completed" => "required|boolean",
        ]);
        $todo->update($data); 
        return response($todo, 200);
    }


    public function destroy(Todo $todo)
    {
        $todo->delete();

        return response("Deleted todo item", 200);
    }

}
