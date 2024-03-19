<?php

namespace App\Http\Controllers\Agenda;

use App\Http\Controllers\Controller;
use App\Models\Agenda\Agenda;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $user = Auth::user();

        try {
            $data = [
                'agendas' => $user->agendas()->with('creator')->get(),
                'sharedAgendas' => $user->sharedAgendas()->with('creator')->get()
            ];            

            return response()->json(['message' => 'Agendas recuperadas com sucesso!', 'data' => $data]);
        } catch (\Exception $exception) {
            Log::error("Erro ao carregar informações da página Home: " . $exception->getFile() . '|' . $exception->getLine());

            return response()->json(['message' => 'Houve um erro ao carregar informações da página Home.'],500);
        }
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
        $user = Auth::user();

        try {
            $data = $request->all();
            $data['user_id'] = $user->id;
            $data['status'] = 1;
    
            $agenda = Agenda::create($data);

            $agenda->members()->sync($data['membros']);

            return response()->json(['message' => 'Agenda criada com sucesso', 'data' => $agenda]);
        } catch (\Exception $exception) {
            Log::error("Erro ao criar uma agenda: " . $exception->getMessage() . $exception->getLine());

            return response()->json(['message' => 'Houve um erro ao criar esta agenda'],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = Auth::user();

        try {
            $agenda = Agenda::find($id);
            if (empty($agenda))
                return response()->json(['message' => 'Não foi possível encontrar a agenda da solicitação.', 'data' => $agenda],204);    

            return response()->json(['message' => 'Agenda resgata com sucesso', 'data' => $agenda]);
        } catch (\Exception $exception) {
            Log::error("Erro ao resgatar os dados da agenda (ID - ".$id."): " . $exception->getMessage() . $exception->getLine());

            return response()->json(['message' => 'Houve um erro ao resgatar os dados da agenda.'],500);
        }
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

    public function formInfo(): JsonResponse
    {
        $user = Auth::user();

        try {
            $data = [                
                'membros' =>  User::all()->except($user->id)->map(function ($user) {
                    return [
                        'label' => $user->name,
                        'value' => $user->id
                    ];
                })
            ];

            return response()->json(['message' => 'Informações para o formulário de agenda recuperadas com sucesso!', 'data' => $data]);
        } catch (\Exception $exception) {
            Log::error("Erro ao carregar informações do Formulário de Agenda: " . $exception->getMessage() . $exception->getLine());

            return response()->json(['message' => 'Houve um erro ao carregar informações do Formulário de Agenda.'],500);
        }
    }
}
