
/**
 * active session page
 */

export interface SessionItem {
  label: string;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
}

export interface SessionSection {
  section: string;
  items: SessionItem[];
}

/**
 * editprofile page
 */

export type EditProfileItem =
  | { label: string; type: "input"; value: string }
  | { label: string; type: "file"; value: string }
  | { label: string; type: "toggle"; value: boolean };

// 🟢 2. Define section type
export interface EditProfileSection {
  section: string;
  items: EditProfileItem[];
}

/**
 * general page
 */

export type SettingItem =
  | { label: string; type: "toggle"; value: boolean }
  | { label: string; type: "nav" | "info"; value: string };

// 🔵 Define section type
export interface SettingSection {
  section: string;
  items: SettingItem[];
}

/**
 * language page
 */

// 🔷 Define union type for different setting item types
export type LanguageItem =
  | { label: string; type: "nav"; value: string }
  | { label: string; type: "toggle"; value: boolean };

// 🔷 Define section type
export interface LanguageSection {
  section: string;
  items: LanguageItem[];
}

/**
 * notification page
 */

type NotificationItem = {
  label: string;
  type: "toggle";
  value: boolean;
};

// 🔷 Define section type
export interface NotificationSection {
  section: string;
  items: NotificationItem[];
}


/**
 * profile page
 */


// 🔷 Types for profile settings
export type ProfileItem =
  | { label: string; type: "info"; value: string }
  | { label: string; type: "toggle"; value: boolean }
  | { label: string; type: "nav"; value: string };

export interface ProfileSection {
  section: string;
  items: ProfileItem[];
}

/**
 * security and privacy
 */

// 🔷 Define type for toggle item
export interface ToggleItem {
  label: string;
  type: "toggle";
  value: boolean;
}

// 🔷 Define type for section
export interface SecuritySection {
  section: string;
  items: ToggleItem[];
}


/**
 * data and sorage
 */

// 🔷 Define individual item types using a discriminated union
export type SettingdataAndStorageItem =
  | { label: string; type: "toggle"; value: boolean }
  | { label: string; type: "info" | "nav"; value: string };

// 🔷 Define section type
export interface DataStorageSection {
  section: string;
  items: SettingItem[];
}


