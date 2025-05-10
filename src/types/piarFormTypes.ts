
export interface PiarFormData {
  // Paso 1 - Encabezado
  fecha_diligenciamiento: string;
  lugar_diligenciamiento: string;
  nombre_persona_diligencia: string;
  rol_en_ie: string;
  institucion_educativa: string;
  sede: string;
  jornada: string;
  
  // Paso 1 - Identificación del estudiante
  nombre_estudiante: string;
  documento_identificacion: string;
  edad: string;
  grado: string;
  
  // Paso 1 - Información general del estudiante
  nombres_apellidos: string;
  lugar_nacimiento: string;
  fecha_nacimiento: string;
  tipo_documento: string;
  numero_identificacion: string;
  departamento: string;
  municipio: string;
  direccion: string;
  telefono: string;
  centro_proteccion: string;
  grado_aspira: string;
  
  // Paso 1 - Entorno Salud
  afiliado_salud: string;
  regimen: string;
  atendido_salud: string;
  tiene_diagnostico: string;
  recibe_tratamiento: string;
  
  // Paso 1 - Entorno Hogar
  nombre_cuidador: string;
  parentesco: string;
  nivel_educativo_cuidador: string;
  telefono_cuidador: string;
  bajo_proteccion: string;
  recibe_subsidio: string;
  
  // Paso 1 - Entorno Educativo
  vinculado_otra_ie: string;
  ultimo_grado: string;
  aprobo: string;
  medio_transporte: string;
  tiempo_desplazamiento: string;
  
  // Paso 2 - Docentes responsables
  docentes_nombres_cargos: string;
  
  // Paso 2 - Características del Estudiante
  descripcion_general: string;
  descripcion_apoyos: string;
  habilidades_competencias: string;
  
  // Paso 2 - Ajustes razonables
  objetivos_propositos: string;
  barreras_evidenciadas: string;
  ajustes_estrategias: string;
  evaluacion_ajustes: string;
  
  // Paso 2 - Recomendaciones institucionales
  acciones: string;
  estrategias: string;
  nombre_firma: string;
  area: string;
  
  // Paso 3 - Participantes
  nombres_directivos_docentes: string;
  nombres_familia: string;
  parentesco_participantes: string;
  
  // Paso 3 - Compromisos
  compromisos_aula: string;
  nombre_actividad: string;
  descripcion_actividad: string;
  frecuencia_actividad: string;
  
  // Paso 3 - Firmas
  firma_estudiante: string;
  firma_acudiente: string;
  firma_docente: string;
  firma_directivo: string;
  
  // Ajustes razonables
  ajustes_trimestre1: any[];
  ajustes_trimestre2: any[];
  ajustes_trimestre3: any[];
  
  // State of the PIAR
  estado?: string;
}

export interface SectionProps {
  formData: PiarFormData;
  handleInputChange: (id: string, value: any) => void;
}
