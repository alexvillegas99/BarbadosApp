export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
  }

export interface VerdadOReto {
  tipoPregunta: string;
  preguntas: Preguntas[];
}

export interface Preguntas {
  categoria: string;
  preguntas: Pregunta[];
}

export interface Pregunta {
  id: string;
  pregunta: string;
}

export interface Nivel {
  nivel: string;
  selected: boolean;
}
export interface Jugadores { 
  nombre: string;
  genero:string;
}
export interface Piramide { 
  fila: string;
  texto:string;
}
//Traguito Caliente


export interface traguito {
  categoria: string;
  genero: string;
  tipo: string;
  texto: string;
}