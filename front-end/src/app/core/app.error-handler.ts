import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';
import { TokenService } from './services/token.service';

const BAD_CREDENTIALS = 'Bad credentials';
const INVALID_TOKEN = 'Invalid refresh token (expired)';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(
    private zone: NgZone,
    private snackbarService: SnackbarService,
    private navService: NavigationService,
    private tokenService: TokenService
  ) {
    super();
  }

  async handleError(errorResponse: any): Promise<void> {
    super.handleError(errorResponse);
    if (errorResponse instanceof HttpErrorResponse) {
      const message = await this._getMessage(errorResponse);
      const errorDescription = !!errorResponse.error
        ? errorResponse.error.error_description
        : null;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 400:
            this._handle400(errorDescription, message);
            break;
          case 401:
            this._handle401(errorDescription);
            break;
          case 403:
            this.snackbarService.openErrorSnackbar(
              message || 'Você não possui permissão para executar esta ação'
            );
            break;
          case 404:
            this.snackbarService.openErrorSnackbar(
              message || 'O recurso não foi encontrado'
            );
            break;
          case 500:
            this._handle500(message || 'Ocorreu um erro!');
            break;
          default:
            this.snackbarService.openErrorSnackbar(
              message || 'Ocorreu um erro!'
            );
        }
      });
    }
  }

  private async _getMessage(errorResponse: HttpErrorResponse): Promise<string> {
    const message = !!errorResponse.error ? errorResponse.error.mensagem : null;
    const isBlobException =
      !message &&
      errorResponse.error instanceof Blob &&
      errorResponse.error.type === 'application/json';
    if (isBlobException) {
      return await this._readBlob(errorResponse.error);
    }
    return message;
  }

  private _handle500(message: string): void {
    this.snackbarService.openErrorSnackbar(message);
  }

  private _handle400(errorDescription400: string, message: string): void {
    if (
      !!errorDescription400 &&
      errorDescription400.includes(BAD_CREDENTIALS)
    ) {
      this.snackbarService.openErrorSnackbar('Usuário e/ou senha inválida');
    } else {
      this.snackbarService.openErrorSnackbar(message || 'Ocorreu um erro!');
    }
  }

  private _handle401(errorDescription401: string): void {
    if (!!errorDescription401 && errorDescription401.includes(INVALID_TOKEN)) {
      this.tokenService.clearAccessToken();
      this.navService.navigateTo(['login']);
    }
  }

  private async _readBlob(error: any): Promise<string> {
    return JSON.parse(await error.text()).mensagem;
  }
}
