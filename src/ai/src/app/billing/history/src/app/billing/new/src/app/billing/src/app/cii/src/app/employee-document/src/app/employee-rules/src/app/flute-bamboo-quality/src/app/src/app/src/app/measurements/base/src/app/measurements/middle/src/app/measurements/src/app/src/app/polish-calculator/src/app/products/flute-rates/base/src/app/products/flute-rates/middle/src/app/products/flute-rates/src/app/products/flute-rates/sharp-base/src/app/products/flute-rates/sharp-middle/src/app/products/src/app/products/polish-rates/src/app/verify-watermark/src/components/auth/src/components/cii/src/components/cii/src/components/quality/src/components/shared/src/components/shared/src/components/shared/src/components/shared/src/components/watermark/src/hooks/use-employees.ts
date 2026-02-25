"use client";
import { useLocalStorage } from '@/hooks/use-local-storage';

export interface Employee {
  id: string;
  name: string;
  address: string;
  refNumber: string;
  gender?: 'Male' | 'Female' | 'Other';
  joinDate?: string;
}

const initialEmployees: Employee[] = [
  { id: 'pj-01-01', name: 'Ritesh Mali', address: 'N.gram, Diglipur,N.Andaman', refNumber: 'PJ-01/01' },
  { id: 'pj-01-02', name: 'Shayan Ojha', address: 'N.gram, Diglipur,N.Andaman', refNumber: 'PJ-01/02' },
  { id: 'pj-01-03', name: 'Debojit Das', address: 'G.nagar, Diglipur, N.Andaman', refNumber: 'PJ-01/03' },
];

export function useEmployees() {
  const [employees, setEmployees] = useLocalStorage<Employee[]>('pjEmployees', initialEmployees);

  const addEmployee = (employee: Omit<Employee, 'id'>) => {
    const newEmployee = { ...employee, id: `pj-emp-${Date.now()}` };
    setEmployees(prev => [...prev, newEmployee]);
  };

  return { employees, addEmployee };
}

