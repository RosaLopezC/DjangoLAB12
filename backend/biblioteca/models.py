from django.db import models

class Autor(models.Model):
    nombre = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    num_usuario = models.IntegerField()
    nif = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Libro(models.Model):
    codigo = models.CharField(max_length=10)
    titulo = models.CharField(max_length=100)
    isbn = models.CharField(max_length=30)
    editorial = models.CharField(max_length=60)
    num_pags = models.PositiveSmallIntegerField()
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo

class Prestamo(models.Model):
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fec_prestamo = models.DateTimeField()
    fec_devolucion = models.DateTimeField()
