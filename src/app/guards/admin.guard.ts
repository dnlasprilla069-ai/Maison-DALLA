import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

interface UsuarioActual {
  id: number;
  rol: 'cliente' | 'admin' | 'costurero';
}

export const adminGuard: CanActivateFn = () => {
  const http = inject(HttpClient);
  const router = inject(Router);
  return http.get<UsuarioActual>('/api/auth/me', { withCredentials: true }).pipe(
    map(usuario => usuario.rol === 'admin' ? true : router.createUrlTree(['/acceso-denegado'])),
    catchError(() => of(router.createUrlTree(['/login'])))
  );
};