
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { PiarFormData } from '@/types/piarFormTypes';
import { supabase } from "@/integrations/supabase/client";
import { getCurrentUser } from './usePiarDataFetch';

interface UsePiarFormActionsProps {
  piarId: string;
  setPiarId: (value: string) => void;
  estudianteId: string;
  setEstudianteId: (value: string) => void;
  formData: PiarFormData;
  setLoading: (value: boolean) => void;
  currentStep: number;
  setCurrentStep: (value: number) => void;
  currentSection: number;
  setCurrentSection: (value: number) => void;
}

export const usePiarFormActions = ({
  piarId,
  setPiarId,
  estudianteId,
  setEstudianteId,
  formData,
  setLoading,
  currentStep,
  setCurrentStep,
  currentSection,
  setCurrentSection
}: UsePiarFormActionsProps) => {
  const navigate = useNavigate();

  const handleSaveDraft = async () => {
    setLoading(true);
    
    try {
      const user = await getCurrentUser();
      
      if (!user) {
        toast.error("Debe iniciar sesión para guardar el formulario");
        return;
      }
      
      // Si no hay un ID de PIAR, crear uno nuevo
      if (!piarId) {
        const newPiarId = uuidv4();
        setPiarId(newPiarId);
        
        // Crear PIAR principal
        const { error: piarError } = await supabase
          .from('piars')
          .insert({
            id: newPiarId,
            user_id: user.id,
            fecha_diligenciamiento: formData.fecha_diligenciamiento,
            lugar_diligenciamiento: formData.lugar_diligenciamiento,
            nombre_persona_diligencia: formData.nombre_persona_diligencia,
            rol_en_ie: formData.rol_en_ie,
            institucion_educativa: formData.institucion_educativa,
            sede: formData.sede,
            jornada: formData.jornada,
            estado: 'borrador'
          });
        
        if (piarError) throw piarError;
        
        // Crear estudiante
        const newEstudianteId = uuidv4();
        setEstudianteId(newEstudianteId);
        
        const { error: estudianteError } = await supabase
          .from('estudiantes')
          .insert({
            id: newEstudianteId,
            piar_id: newPiarId,
            nombre_estudiante: formData.nombre_estudiante,
            documento_identificacion: formData.documento_identificacion,
            edad: formData.edad,
            grado: formData.grado,
            lugar_nacimiento: formData.lugar_nacimiento,
            fecha_nacimiento: formData.fecha_nacimiento || null,
            tipo_documento: formData.tipo_documento,
            numero_identificacion: formData.numero_identificacion,
            departamento: formData.departamento,
            municipio: formData.municipio,
            direccion: formData.direccion,
            telefono: formData.telefono,
            centro_proteccion: formData.centro_proteccion,
            grado_aspira: formData.grado_aspira
          });
        
        if (estudianteError) throw estudianteError;
        
        // Crear entorno salud
        const { error: saludError } = await supabase
          .from('entorno_salud')
          .insert({
            estudiante_id: newEstudianteId,
            afiliado_salud: formData.afiliado_salud,
            regimen: formData.regimen,
            atendido_salud: formData.atendido_salud,
            tiene_diagnostico: formData.tiene_diagnostico,
            recibe_tratamiento: formData.recibe_tratamiento
          });
        
        if (saludError) throw saludError;
        
        // Crear entorno hogar
        const { error: hogarError } = await supabase
          .from('entorno_hogar')
          .insert({
            estudiante_id: newEstudianteId,
            nombre_cuidador: formData.nombre_cuidador,
            parentesco: formData.parentesco,
            nivel_educativo_cuidador: formData.nivel_educativo_cuidador,
            telefono_cuidador: formData.telefono_cuidador,
            bajo_proteccion: formData.bajo_proteccion,
            recibe_subsidio: formData.recibe_subsidio
          });
        
        if (hogarError) throw hogarError;
        
        // Crear entorno educativo
        const { error: educativoError } = await supabase
          .from('entorno_educativo')
          .insert({
            estudiante_id: newEstudianteId,
            vinculado_otra_ie: formData.vinculado_otra_ie,
            ultimo_grado: formData.ultimo_grado,
            aprobo: formData.aprobo,
            medio_transporte: formData.medio_transporte,
            tiempo_desplazamiento: formData.tiempo_desplazamiento
          });
        
        if (educativoError) throw educativoError;
        
        // Crear características y ajustes
        const { error: caracteristicasError } = await supabase
          .from('caracteristicas_ajustes')
          .insert({
            piar_id: newPiarId,
            docentes_nombres_cargos: formData.docentes_nombres_cargos,
            descripcion_general: formData.descripcion_general,
            descripcion_apoyos: formData.descripcion_apoyos,
            habilidades_competencias: formData.habilidades_competencias,
            objetivos_propositos: formData.objetivos_propositos,
            barreras_evidenciadas: formData.barreras_evidenciadas,
            ajustes_estrategias: formData.ajustes_estrategias,
            evaluacion_ajustes: formData.evaluacion_ajustes,
            acciones: formData.acciones,
            estrategias: formData.estrategias,
            nombre_firma: formData.nombre_firma,
            area: formData.area
          });
        
        if (caracteristicasError) throw caracteristicasError;
        
        // Crear participantes y compromisos
        const { error: participantesError } = await supabase
          .from('participantes_compromisos')
          .insert({
            piar_id: newPiarId,
            nombres_directivos_docentes: formData.nombres_directivos_docentes,
            nombres_familia: formData.nombres_familia,
            parentesco_participantes: formData.parentesco_participantes,
            compromisos_aula: formData.compromisos_aula,
            nombre_actividad: formData.nombre_actividad,
            descripcion_actividad: formData.descripcion_actividad,
            frecuencia_actividad: formData.frecuencia_actividad,
            firma_estudiante: formData.firma_estudiante,
            firma_acudiente: formData.firma_acudiente,
            firma_docente: formData.firma_docente,
            firma_directivo: formData.firma_directivo
          });
        
        if (participantesError) throw participantesError;
        
        // Crear ajustes por trimestre
        for (let i = 1; i <= 3; i++) {
          const ajustes = formData[`ajustes_trimestre${i}` as keyof PiarFormData];
          
          const { error: ajustesError } = await supabase
            .from('ajustes_trimestre')
            .insert({
              piar_id: newPiarId,
              trimestre: i,
              ajustes: ajustes || []
            });
          
          if (ajustesError) throw ajustesError;
        }
        
        toast.success("Borrador guardado exitosamente");
      } else {
        // Actualizar PIAR existente
        const { error: piarError } = await supabase
          .from('piars')
          .update({
            fecha_diligenciamiento: formData.fecha_diligenciamiento,
            lugar_diligenciamiento: formData.lugar_diligenciamiento,
            nombre_persona_diligencia: formData.nombre_persona_diligencia,
            rol_en_ie: formData.rol_en_ie,
            institucion_educativa: formData.institucion_educativa,
            sede: formData.sede,
            jornada: formData.jornada,
            updated_at: new Date().toISOString()
          })
          .eq('id', piarId);
          
        if (piarError) throw piarError;
        
        // Actualizar estudiante
        const { error: estudianteError } = await supabase
          .from('estudiantes')
          .update({
            nombre_estudiante: formData.nombre_estudiante,
            documento_identificacion: formData.documento_identificacion,
            edad: formData.edad,
            grado: formData.grado,
            lugar_nacimiento: formData.lugar_nacimiento,
            fecha_nacimiento: formData.fecha_nacimiento || null,
            tipo_documento: formData.tipo_documento,
            numero_identificacion: formData.numero_identificacion,
            departamento: formData.departamento,
            municipio: formData.municipio,
            direccion: formData.direccion,
            telefono: formData.telefono,
            centro_proteccion: formData.centro_proteccion,
            grado_aspira: formData.grado_aspira,
            updated_at: new Date().toISOString()
          })
          .eq('piar_id', piarId);
          
        if (estudianteError) throw estudianteError;
        
        toast.success("Borrador actualizado exitosamente");
      }
    } catch (error: any) {
      console.error("Error al guardar el PIAR:", error);
      toast.error(`Error al guardar: ${error.message || "Error desconocido"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    if (currentStep < 3) { // total number of steps
      setCurrentStep(currentStep + 1);
      setCurrentSection(0); // Reset section index when changing steps
      window.scrollTo(0, 0);
    } else {
      // Handle final submission
      setLoading(true);
      
      try {
        if (piarId) {
          // Actualizar estado del PIAR a completado
          const { error } = await supabase
            .from('piars')
            .update({ 
              estado: 'completado',
              updated_at: new Date().toISOString() 
            })
            .eq('id', piarId);
            
          if (error) throw error;
        } else {
          // Si por alguna razón no se ha guardado antes, guardar primero
          await handleSaveDraft();
          
          // Luego actualizar a completado
          if (piarId) {
            const { error } = await supabase
              .from('piars')
              .update({ 
                estado: 'completado',
                updated_at: new Date().toISOString() 
              })
              .eq('id', piarId);
              
            if (error) throw error;
          }
        }
        
        toast.success("PIAR completado exitosamente");
        navigate('/dashboard');
      } catch (error: any) {
        console.error("Error al completar el PIAR:", error);
        toast.error(`Error al completar: ${error.message || "Error desconocido"}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCurrentSection(0); // Reset section index when changing steps
      window.scrollTo(0, 0);
    }
  };
  
  const handleNextSection = () => {
    // Get total sections from STEP_SECTIONS for the current step
    const totalSections = [6, 4, 3][currentStep - 1]; // Hardcoded from STEP_SECTIONS
    
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else if (currentStep < 3) { // total number of steps
      // Move to next step if we're at the last section
      setCurrentStep(currentStep + 1);
      setCurrentSection(0);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    } else if (currentStep > 1) {
      // Move to previous step if we're at the first section
      setCurrentStep(currentStep - 1);
      const prevStepTotalSections = [6, 4, 3][currentStep - 2]; // Hardcoded from STEP_SECTIONS
      setCurrentSection(prevStepTotalSections - 1); // Go to last section of previous step
      window.scrollTo(0, 0);
    }
  };
  
  const handleDownloadPDF = () => {
    toast.info("Preparando PDF para descarga...");
    // En una implementación real esto se conectaría con la generación de PDF
  };

  return {
    handleSaveDraft,
    handleNext,
    handlePrevious,
    handleNextSection,
    handlePrevSection,
    handleDownloadPDF
  };
};
