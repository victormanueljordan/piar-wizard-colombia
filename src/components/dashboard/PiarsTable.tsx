
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Edit, PlusCircle } from 'lucide-react';
import { Piar } from '@/hooks/usePiars';

interface PiarsTableProps {
  piars: Piar[];
  loading: boolean;
}

const PiarsTable: React.FC<PiarsTableProps> = ({ piars, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-piar-blue"></div>
        <span className="ml-3 text-gray-600">Cargando estudiantes...</span>
      </div>
    );
  }

  if (piars.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No hay estudiantes con PIAR registrados.</p>
        <Button 
          asChild
          className="transition-all duration-300 hover:scale-[1.02]"
        >
          <Link to="/crear-piar">
            <PlusCircle className="h-4 w-4 mr-2" />
            Crear primer PIAR
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Nombre del Estudiante</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha de Creación</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {piars.map((piar) => (
            <TableRow key={piar.id} className="hover:bg-gray-50 transition-colors duration-150">
              <TableCell className="font-medium">
                {piar.estudiante?.nombre_estudiante || "Sin información"}
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  piar.estado === 'borrador' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {piar.estado === 'borrador' ? 'Borrador' : 'Completo'}
                </span>
              </TableCell>
              <TableCell>{piar.fecha_creacion}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 transition-all duration-200 hover:scale-[1.03]"
                    asChild
                  >
                    <Link to={`/piar/${piar.id}`}>
                      {piar.estado === 'borrador' ? (
                        <>
                          <Edit className="h-3 w-3" />
                          <span>Completar</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-3 w-3" />
                          <span>Visualizar</span>
                        </>
                      )}
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PiarsTable;
