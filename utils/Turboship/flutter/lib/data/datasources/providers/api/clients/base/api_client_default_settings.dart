import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:turboship/all.dart';

class ApiClientSettings {
  static const defaultErrorResponseMapperType =
      ErrorResponseMapperType.jsonObject;

  static const defaultSuccessResponseMapperType =
      SuccessResponseMapperType.dataJsonObject;
  const ApiClientSettings._();

  static List<Interceptor> requiredInterceptors(Dio dio) => [
        if (kDebugMode) CustomLogInterceptor(),
        ConnectivityInterceptor(),
        TrimInterceptor(),
        RetryInterceptor(dio),
      ];
}
