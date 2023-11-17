from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from django.utils.translation import gettext_lazy as _
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .backends import PhoneBackend


@method_decorator(csrf_exempt, name='dispatch')
class TokenCreateByPhoneView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        password = request.data.get('password')

        if phone is None or password is None:
            return Response(
                {'message': _('Телефон и пароль являются '
                              'обязательными полями')},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(
            request,
            phone=phone,
            password=password,
            backend=PhoneBackend()
        )

        if not user:
            return Response({'message': _('Неверный телефон или пароль.')},
                            status=status.HTTP_401_UNAUTHORIZED)

        token, created = Token.objects.get_or_create(user=user)

        return Response({'auth_token': token.key})
