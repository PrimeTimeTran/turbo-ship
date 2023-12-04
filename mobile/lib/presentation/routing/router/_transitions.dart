// part of 'app_router.dart';

// class NoAnimationTransitionPage<T> extends CustomTransitionPage<T> {
//   NoAnimationTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) => child,
//         );
// }

// class FadeTransitionPage<T> extends CustomTransitionPage<T> {
//   FadeTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return FadeTransition(
//               opacity: animation,
//               child: child,
//             );
//           },
//         );
// }

// class SlideTransitionPage<T> extends CustomTransitionPage<T> {
//   SlideTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return SlideTransition(
//               position: Tween<Offset>(
//                 begin: const Offset(1, 0),
//                 end: Offset.zero,
//               ).animate(animation),
//               child: child,
//             );
//           },
//         );
// }

// class SlideUpTransitionPage<T> extends CustomTransitionPage<T> {
//   SlideUpTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return SlideTransition(
//               position: Tween<Offset>(
//                 begin: const Offset(0, 1),
//                 end: Offset.zero,
//               ).animate(animation),
//               child: child,
//             );
//           },
//         );
// }

// class SlideDownTransitionPage<T> extends CustomTransitionPage<T> {
//   SlideDownTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return SlideTransition(
//               position: Tween<Offset>(
//                 begin: const Offset(0, -1),
//                 end: Offset.zero,
//               ).animate(animation),
//               child: child,
//             );
//           },
//         );
// }

// class ZoomInTransitionPage<T> extends CustomTransitionPage<T> {
//   ZoomInTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return ScaleTransition(
//               scale: Tween<double>(
//                 begin: 0,
//                 end: 1,
//               ).animate(animation),
//               child: child,
//             );
//           },
//         );
// }

// class ScaleTransitionPage<T> extends CustomTransitionPage<T> {
//   ScaleTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return ScaleTransition(
//               scale: animation,
//               child: child,
//             );
//           },
//         );
// }

// class RotationTransitionPage<T> extends CustomTransitionPage<T> {
//   RotationTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return RotationTransition(
//               turns: animation,
//               child: child,
//             );
//           },
//         );
// }

// class SizeTransitionPage<T> extends CustomTransitionPage<T> {
//   SizeTransitionPage({
//     required Widget child,
//     LocalKey? key,
//   }) : super(
//           key: key,
//           child: child,
//           transitionsBuilder: (context, animation, secondaryAnimation, child) {
//             return SizeTransition(
//               sizeFactor: animation,
//               child: child,
//             );
//           },
//         );
// }
