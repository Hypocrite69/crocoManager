import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://vnlqnriwuhorgkfenfat.supabase.co',      // <- Deine Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZubHFucml3dWhvcmdrZmVuZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3Nzg2NTMsImV4cCI6MjA2MjM1NDY1M30.FFazGGluJVvmTvcWE0OQhB1d2ePJSYLfuUjj8EirP9w'                          // <- Dein Public-Anon-Key
    );
  }

  get auth() {
    return this.supabase.auth;
  }

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

  async getUsers() {
    const { data, error } = await this.supabase.from('users').select('*');
    if (error) throw error;
    return data;
  }

  async createUser(user: { name: string; password: string }) {
    const { data, error } = await this.supabase.from('users').insert([user]);
    if (error) throw error;
    return data;
  }

  async updatePassword(userId: number, newPassword: string) {
    const { data, error } = await this.supabase
      .from('users')
      .update({ password: newPassword })
      .eq('id', userId);
    if (error) throw error;
    return data;
  }
}
