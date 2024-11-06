from rest_framework import viewsets
from .models import Autor, Usuario, Libro, Prestamo
from .serializers import AutorSerializer, UsuarioSerializer, LibroSerializer, PrestamoSerializer

class AutorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer

class UsuarioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer

class PrestamoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
