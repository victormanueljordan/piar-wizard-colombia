
import { useEffect } from 'react';
import { usePiarFormState } from './piar/usePiarFormState';
import { fetchPiarById } from './piar/usePiarDataFetch';
import { usePiarFormActions } from './piar/usePiarFormActions';

const usePiarForm = (idProp?: string) => {
  const {
    currentStep,
    setCurrentStep,
    currentSection,
    setCurrentSection,
    loading,
    setLoading,
    piarId,
    setPiarId,
    estudianteId,
    setEstudianteId,
    formData,
    setFormData,
    handleInputChange
  } = usePiarFormState(idProp);
  
  const {
    handleSaveDraft,
    handleNext,
    handlePrevious,
    handleNextSection,
    handlePrevSection,
    handleDownloadPDF
  } = usePiarFormActions({
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
  });
  
  // Cargar PIAR si está en modo edición
  useEffect(() => {
    const loadPiar = async () => {
      if (idProp) {
        setPiarId(idProp);
        await fetchPiarById(idProp, setLoading, setFormData, setEstudianteId);
      }
    };
    
    loadPiar();
  }, [idProp, setPiarId, setFormData, setLoading, setEstudianteId]);

  return {
    currentStep,
    currentSection,
    formData,
    loading,
    handleInputChange,
    handleSaveDraft,
    handleNext,
    handlePrevious,
    handleNextSection,
    handlePrevSection,
    handleDownloadPDF,
  };
};

export default usePiarForm;
