<?php

namespace App\Http\Controllers\Access;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    public function searchUser(Request $request)
    {
        try {
            $type = filter_var($request->type, filter:FILTER_VALIDATE_EMAIL) ? 'email' : 'login';
            
            $user = User::where($type,$request->type)->first();

            return response()->json(['message' => 'Pesquisa realizada com sucesso!', 'data' => (!empty($user) ? $user->first_name : null)]);
        } catch (\Exception $exception) {
            \Log::error("Houve um erro ao pesquisar o usuário com este login: " . $exception->getMessage() . $exception->getLine());

            return response()->json(['message' => 'Houve um erro ao pesquisar o usuário com este login.'],500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->all();
    
            $data['password'] = Crypt::encryptString($data['password']);
    
            $user = User::create($data);

            return response()->json(['message' => 'Usuário criado com sucesso', 'data' => $user]);
        } catch (\Exception $exception) {
            return response()->json(['message' => 'Houve um erro ao realizar o seu cadastro'],500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
