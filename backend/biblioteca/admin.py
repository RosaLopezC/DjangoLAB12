from django.contrib import admin
from .models import Libro, Autor, Usuario, Prestamo

# Registro de los modelos en el administrador
@admin.register(Libro)
class LibroAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'codigo', 'isbn', 'editorial', 'num_pags')
    search_fields = ('titulo', 'codigo', 'isbn', 'editorial')
    list_filter = ('editorial',)


@admin.register(Autor)
class AutorAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'nacionalidad')
    search_fields = ('nombre', 'nacionalidad')


@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'num_usuario', 'nif', 'telefono')
    search_fields = ('nombre', 'nif', 'telefono')
    list_filter = ('direccion',)


@admin.register(Prestamo)
class PrestamoAdmin(admin.ModelAdmin):
    list_display = ('libro', 'usuario', 'fec_prestamo', 'fec_devolucion')
    search_fields = ('libro__titulo', 'usuario__nombre')
    list_filter = ('fec_prestamo', 'fec_devolucion')
