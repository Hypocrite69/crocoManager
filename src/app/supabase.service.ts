import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface Mitarbeiter {
  Vorname: string;
  Name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://vnlqnriwuhorgkfenfat.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZubHFucml3dWhvcmdrZmVuZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3Nzg2NTMsImV4cCI6MjA2MjM1NDY1M30.FFazGGluJVvmTvcWE0OQhB1d2ePJSYLfuUjj8EirP9w'
    );
  }

  // Zugriff auf Supabase Auth
  get auth() {
    return this.supabase.auth;
  }

  //Passwort-Prüfung per Stored Procedure
  async checkPassword(p_mnr: string, p_plain_pw: string): Promise<boolean> {
    const { data, error } = await this.supabase.rpc('correctpassword', {
      p_mnr,
      p_plain_pw,
    });

    if (error) {
      console.error('RPC-Fehler:', error.message);
      return false;
    }

    return data === true;
  }

  //Mitarbeiterdaten abrufen (Vorname & Nachname)
  async getMitarbeiterByMnr(mnr: string): Promise<{ Vorname: string; Name: string }> {
    const { data, error } = await this.supabase
      .from('mitarbeiter')
      .select('Vorname, Name')
      .eq('"MNr"', mnr)
      .single();

    if (error || !data) {
      throw new Error('Benutzer nicht gefunden');
    }
    return data;
  }

async updatePassword(
  p_mnr: number,
  p_old_pw: string,
  p_new_pw: string
): Promise<boolean> {
  const { data, error } = await this.supabase.rpc('change_password', {
    p_mnr,
    p_old_pw,
    p_new_pw
  });
 
  if (error) {
    console.error('Fehler beim Passwortwechsel:', error.message);
    return false;
  }
 
  return true;
}
}