part of 'app_router.dart';

enum AppPages {
  ftue,
  tabARoot,
  tabAStacked,
  tabBRoot,
  tabBStacked,
  tabCRoot,
  tabCStacked,
  tabDRoot,
  tabDStacked,
  tabERoot,
  tabEStacked,
  settings,
  privacy,
  entity,
  uiKit,
  design_guide
}

extension AppPageX on AppPages {
  String get name {
    switch (this) {
      case AppPages.ftue:
        return 'WELCOME';
      case AppPages.tabARoot:
        return 'TAB_A_ROOT';
      case AppPages.tabAStacked:
        return 'TAB_A_STACKED';
      case AppPages.tabBRoot:
        return 'TAB_B_ROOT';
      case AppPages.tabBStacked:
        return 'TAB_B_STACKED';
      case AppPages.tabCRoot:
        return 'TAB_C_ROOT';
      case AppPages.tabCStacked:
        return 'TAB_C_STACKED';
      case AppPages.tabDRoot:
        return 'TAB_D_ROOT';
      case AppPages.tabDStacked:
        return 'TAB_D_STACKED';
      case AppPages.tabERoot:
        return 'TAB_E_ROOT';
      case AppPages.design_guide:
        return 'TAB_E_DESIGN_GUIDE';
      case AppPages.tabEStacked:
        return 'TAB_E_STACKED';
      case AppPages.entity:
        return 'TAB_A_ENTITY';
      case AppPages.privacy:
        return 'TAB_DRAWER_PRIVACY';
      case AppPages.settings:
        return 'TAB_DRAWER_SETTINGS';
      case AppPages.uiKit:
        return 'TAB_UI_KIT';
    }
  }

  String get path {
    switch (this) {
      case AppPages.ftue:
        return '/welcome';
      case AppPages.tabARoot:
        return '/tab_a_root';
      case AppPages.tabAStacked:
        return '/tab_a_stacked';
      case AppPages.tabBRoot:
        return '/tab_b_root';
      case AppPages.tabBStacked:
        return '/tab_b_stacked';
      case AppPages.tabCRoot:
        return '/tab_c_root';
      case AppPages.tabCStacked:
        return '/tab_c_stacked';
      case AppPages.tabDRoot:
        return '/tab_d_root';
      case AppPages.tabDStacked:
        return '/tab_d_stacked';
      case AppPages.tabERoot:
        return '/tab_e_root';
      case AppPages.design_guide:
        return '/tab_e_design_guide';
      case AppPages.tabEStacked:
        return '/tab_e_stacked';
      case AppPages.entity:
        return '/tab_a_entity';
      case AppPages.settings:
        return '/tab_drawer_entity';
      case AppPages.privacy:
        return '/tab_drawer_privacy';
      case AppPages.uiKit:
        return '/uiKit';
    }
  }
}
