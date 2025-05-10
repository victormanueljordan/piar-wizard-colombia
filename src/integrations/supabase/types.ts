export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ajustes_trimestre: {
        Row: {
          ajustes: Json | null
          created_at: string
          id: string
          piar_id: string | null
          trimestre: number
          updated_at: string
        }
        Insert: {
          ajustes?: Json | null
          created_at?: string
          id?: string
          piar_id?: string | null
          trimestre: number
          updated_at?: string
        }
        Update: {
          ajustes?: Json | null
          created_at?: string
          id?: string
          piar_id?: string | null
          trimestre?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ajustes_trimestre_piar_id_fkey"
            columns: ["piar_id"]
            isOneToOne: false
            referencedRelation: "piars"
            referencedColumns: ["id"]
          },
        ]
      }
      caracteristicas_ajustes: {
        Row: {
          acciones: string | null
          ajustes_estrategias: string | null
          area: string | null
          barreras_evidenciadas: string | null
          created_at: string
          descripcion_apoyos: string | null
          descripcion_general: string | null
          docentes_nombres_cargos: string | null
          estrategias: string | null
          evaluacion_ajustes: string | null
          habilidades_competencias: string | null
          id: string
          nombre_firma: string | null
          objetivos_propositos: string | null
          piar_id: string | null
          updated_at: string
        }
        Insert: {
          acciones?: string | null
          ajustes_estrategias?: string | null
          area?: string | null
          barreras_evidenciadas?: string | null
          created_at?: string
          descripcion_apoyos?: string | null
          descripcion_general?: string | null
          docentes_nombres_cargos?: string | null
          estrategias?: string | null
          evaluacion_ajustes?: string | null
          habilidades_competencias?: string | null
          id?: string
          nombre_firma?: string | null
          objetivos_propositos?: string | null
          piar_id?: string | null
          updated_at?: string
        }
        Update: {
          acciones?: string | null
          ajustes_estrategias?: string | null
          area?: string | null
          barreras_evidenciadas?: string | null
          created_at?: string
          descripcion_apoyos?: string | null
          descripcion_general?: string | null
          docentes_nombres_cargos?: string | null
          estrategias?: string | null
          evaluacion_ajustes?: string | null
          habilidades_competencias?: string | null
          id?: string
          nombre_firma?: string | null
          objetivos_propositos?: string | null
          piar_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "caracteristicas_ajustes_piar_id_fkey"
            columns: ["piar_id"]
            isOneToOne: false
            referencedRelation: "piars"
            referencedColumns: ["id"]
          },
        ]
      }
      entorno_educativo: {
        Row: {
          aprobo: string | null
          created_at: string
          estudiante_id: string | null
          id: string
          medio_transporte: string | null
          tiempo_desplazamiento: string | null
          ultimo_grado: string | null
          updated_at: string
          vinculado_otra_ie: string | null
        }
        Insert: {
          aprobo?: string | null
          created_at?: string
          estudiante_id?: string | null
          id?: string
          medio_transporte?: string | null
          tiempo_desplazamiento?: string | null
          ultimo_grado?: string | null
          updated_at?: string
          vinculado_otra_ie?: string | null
        }
        Update: {
          aprobo?: string | null
          created_at?: string
          estudiante_id?: string | null
          id?: string
          medio_transporte?: string | null
          tiempo_desplazamiento?: string | null
          ultimo_grado?: string | null
          updated_at?: string
          vinculado_otra_ie?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entorno_educativo_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "estudiantes"
            referencedColumns: ["id"]
          },
        ]
      }
      entorno_hogar: {
        Row: {
          bajo_proteccion: string | null
          created_at: string
          estudiante_id: string | null
          id: string
          nivel_educativo_cuidador: string | null
          nombre_cuidador: string | null
          parentesco: string | null
          recibe_subsidio: string | null
          telefono_cuidador: string | null
          updated_at: string
        }
        Insert: {
          bajo_proteccion?: string | null
          created_at?: string
          estudiante_id?: string | null
          id?: string
          nivel_educativo_cuidador?: string | null
          nombre_cuidador?: string | null
          parentesco?: string | null
          recibe_subsidio?: string | null
          telefono_cuidador?: string | null
          updated_at?: string
        }
        Update: {
          bajo_proteccion?: string | null
          created_at?: string
          estudiante_id?: string | null
          id?: string
          nivel_educativo_cuidador?: string | null
          nombre_cuidador?: string | null
          parentesco?: string | null
          recibe_subsidio?: string | null
          telefono_cuidador?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "entorno_hogar_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "estudiantes"
            referencedColumns: ["id"]
          },
        ]
      }
      entorno_salud: {
        Row: {
          afiliado_salud: string | null
          atendido_salud: string | null
          created_at: string
          estudiante_id: string | null
          id: string
          recibe_tratamiento: string | null
          regimen: string | null
          tiene_diagnostico: string | null
          updated_at: string
        }
        Insert: {
          afiliado_salud?: string | null
          atendido_salud?: string | null
          created_at?: string
          estudiante_id?: string | null
          id?: string
          recibe_tratamiento?: string | null
          regimen?: string | null
          tiene_diagnostico?: string | null
          updated_at?: string
        }
        Update: {
          afiliado_salud?: string | null
          atendido_salud?: string | null
          created_at?: string
          estudiante_id?: string | null
          id?: string
          recibe_tratamiento?: string | null
          regimen?: string | null
          tiene_diagnostico?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "entorno_salud_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "estudiantes"
            referencedColumns: ["id"]
          },
        ]
      }
      estudiantes: {
        Row: {
          centro_proteccion: string | null
          created_at: string
          departamento: string | null
          direccion: string | null
          documento_identificacion: string | null
          edad: string | null
          fecha_nacimiento: string | null
          grado: string | null
          grado_aspira: string | null
          id: string
          lugar_nacimiento: string | null
          municipio: string | null
          nombre_estudiante: string | null
          numero_identificacion: string | null
          piar_id: string | null
          telefono: string | null
          tipo_documento: string | null
          updated_at: string
        }
        Insert: {
          centro_proteccion?: string | null
          created_at?: string
          departamento?: string | null
          direccion?: string | null
          documento_identificacion?: string | null
          edad?: string | null
          fecha_nacimiento?: string | null
          grado?: string | null
          grado_aspira?: string | null
          id?: string
          lugar_nacimiento?: string | null
          municipio?: string | null
          nombre_estudiante?: string | null
          numero_identificacion?: string | null
          piar_id?: string | null
          telefono?: string | null
          tipo_documento?: string | null
          updated_at?: string
        }
        Update: {
          centro_proteccion?: string | null
          created_at?: string
          departamento?: string | null
          direccion?: string | null
          documento_identificacion?: string | null
          edad?: string | null
          fecha_nacimiento?: string | null
          grado?: string | null
          grado_aspira?: string | null
          id?: string
          lugar_nacimiento?: string | null
          municipio?: string | null
          nombre_estudiante?: string | null
          numero_identificacion?: string | null
          piar_id?: string | null
          telefono?: string | null
          tipo_documento?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "estudiantes_piar_id_fkey"
            columns: ["piar_id"]
            isOneToOne: false
            referencedRelation: "piars"
            referencedColumns: ["id"]
          },
        ]
      }
      participantes_compromisos: {
        Row: {
          compromisos_aula: string | null
          created_at: string
          descripcion_actividad: string | null
          firma_acudiente: string | null
          firma_directivo: string | null
          firma_docente: string | null
          firma_estudiante: string | null
          frecuencia_actividad: string | null
          id: string
          nombre_actividad: string | null
          nombres_directivos_docentes: string | null
          nombres_familia: string | null
          parentesco_participantes: string | null
          piar_id: string | null
          updated_at: string
        }
        Insert: {
          compromisos_aula?: string | null
          created_at?: string
          descripcion_actividad?: string | null
          firma_acudiente?: string | null
          firma_directivo?: string | null
          firma_docente?: string | null
          firma_estudiante?: string | null
          frecuencia_actividad?: string | null
          id?: string
          nombre_actividad?: string | null
          nombres_directivos_docentes?: string | null
          nombres_familia?: string | null
          parentesco_participantes?: string | null
          piar_id?: string | null
          updated_at?: string
        }
        Update: {
          compromisos_aula?: string | null
          created_at?: string
          descripcion_actividad?: string | null
          firma_acudiente?: string | null
          firma_directivo?: string | null
          firma_docente?: string | null
          firma_estudiante?: string | null
          frecuencia_actividad?: string | null
          id?: string
          nombre_actividad?: string | null
          nombres_directivos_docentes?: string | null
          nombres_familia?: string | null
          parentesco_participantes?: string | null
          piar_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "participantes_compromisos_piar_id_fkey"
            columns: ["piar_id"]
            isOneToOne: false
            referencedRelation: "piars"
            referencedColumns: ["id"]
          },
        ]
      }
      piars: {
        Row: {
          created_at: string
          estado: string | null
          fecha_diligenciamiento: string
          id: string
          institucion_educativa: string | null
          jornada: string | null
          lugar_diligenciamiento: string | null
          nombre_persona_diligencia: string | null
          rol_en_ie: string | null
          sede: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          estado?: string | null
          fecha_diligenciamiento?: string
          id?: string
          institucion_educativa?: string | null
          jornada?: string | null
          lugar_diligenciamiento?: string | null
          nombre_persona_diligencia?: string | null
          rol_en_ie?: string | null
          sede?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          estado?: string | null
          fecha_diligenciamiento?: string
          id?: string
          institucion_educativa?: string | null
          jornada?: string | null
          lugar_diligenciamiento?: string | null
          nombre_persona_diligencia?: string | null
          rol_en_ie?: string | null
          sede?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
