import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiService } from '../../service/api.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
 
  const apiService=inject(ApiService);
  
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
        if(error.status===401)
        {
          const isContinue=confirm("Are you sure want to continue?");
          if(isContinue)
          {
            apiService.tokenSubject$.next(true);
          }
        }
        return throwError(error);
    }
  )
  );
};
