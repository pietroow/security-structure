import { HttpHeaders, HttpParams } from "@angular/common/http";

export const PARAMS_REFRESH_TOKEN = new HttpParams().set('grant_type', 'refresh_token');
const clientEncrypted = btoa('pietroow:S3CUR1TYD3V3L0PM3NT');

export const CLIENT_HEADER = new HttpHeaders({
  Authorization: `Basic ${clientEncrypted}`,
  'Content-Type': 'application/x-www-form-urlencoded',
});
