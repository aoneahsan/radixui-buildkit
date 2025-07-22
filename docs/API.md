# RadixUI BuildKit API Documentation

## Table of Contents

- [Configuration](#configuration)
- [Components](#components)
  - [Accordion Components](#accordion-components)
  - [Form Components](#form-components)
  - [UI Elements](#ui-elements)
  - [Layout Components](#layout-components)
  - [Data Display](#data-display)
  - [Utility Components](#utility-components)
- [Higher Order Components](#higher-order-components)
- [Pages](#pages)
- [State Management](#state-management)
- [Types and Interfaces](#types-and-interfaces)
- [Utilities](#utilities)
- [Validation Schemas](#validation-schemas)
- [Enums](#enums)
- [Data Constants](#data-constants)

---

## Configuration

### `configureZTK`
Imported from `ts-buildkit`. Configuration function for the toolkit.

### `configureZRTK`
Custom configuration function for RadixUI BuildKit. Currently needs implementation.

```typescript
configureZRTK(): void
```

---

## Components

### Accordion Components

#### `ZAccordingGroup`
Wrapper component for accordion groups using Radix UI.

```typescript
interface ZAccordingGroupProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}
```

#### `ZAccordionItem`
Individual accordion item component.

```typescript
interface ZAccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}
```

#### `ZAccordionTrigger`
Trigger button for accordion items.

```typescript
interface ZAccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}
```

#### `ZAccordionContent`
Content container for accordion items.

```typescript
interface ZAccordionContentProps {
  children: React.ReactNode;
  className?: string;
}
```

### Form Components

#### `ZInput`
Enhanced input component with various states and validations.

```typescript
interface ZRUInputI {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;
  touched?: boolean;
  className?: string;
  variant?: ZRUBasicVariantE;
  size?: ZRUSizeE;
}
```

#### `ZTextArea`
Multi-line text input component.

```typescript
interface ZTextAreaProps extends ZRUInputI {
  rows?: number;
  cols?: number;
  resize?: boolean;
}
```

#### `ZAmountInput`
Specialized input for monetary amounts with currency support.

```typescript
interface ZAmountInputProps extends ZRUInputI {
  currency?: string;
  currencyPosition?: "left" | "right";
  thousandSeparator?: boolean;
  decimalPlaces?: number;
}
```

#### `ZPrizeInput`
Input component specifically designed for prize/reward amounts.

```typescript
interface ZPrizeInputProps extends ZAmountInputProps {
  showPrizeIcon?: boolean;
  maxPrize?: number;
  minPrize?: number;
}
```

#### `ZCheckbox`
Checkbox component with Radix UI integration.

```typescript
interface ZCheckboxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  error?: string;
  className?: string;
}
```

#### `ZRadioGroup`
Radio button group component.

```typescript
interface ZRadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options: ISelectOption[];
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}
```

#### `ZSelect`
Advanced select dropdown component.

```typescript
interface ZSelectProps {
  id?: string;
  name?: string;
  value?: string | ISelectOption;
  onChange?: (value: ISelectOption) => void;
  options: ISelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  className?: string;
}
```

#### `ZSwitch`
Toggle switch component.

```typescript
interface ZSwitchProps {
  id?: string;
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  size?: ZRUSizeE;
}
```

#### `ZSlider`
Range slider component.

```typescript
interface ZSliderProps {
  id?: string;
  name?: string;
  value?: number | number[];
  onChange?: (value: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical";
}
```

### UI Elements

#### `ZButton`
Versatile button component with multiple variants.

```typescript
interface ZRUButtonI {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  variant?: ZRUCommonVariantE;
  size?: ZRUSizeE;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}
```

#### `ZBadge`
Badge component for labels and status indicators.

```typescript
interface ZBadgeProps {
  children: React.ReactNode;
  variant?: ZRUBadgeVariantE;
  size?: ZRUSizeE;
  color?: string;
  rounded?: boolean;
  className?: string;
}
```

#### `ZAvatar`
Avatar component for user profiles.

```typescript
interface ZAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: ZRUSizeE;
  shape?: "circle" | "square";
  status?: "online" | "offline" | "away" | "busy";
  className?: string;
}
```

#### `ZCard`
Card container component.

```typescript
interface ZCardProps {
  children: React.ReactNode;
  variant?: ZRUBasicVariantE;
  padding?: ZRUSpacingE;
  shadow?: boolean;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}
```

#### `ZDialog`
Modal dialog component.

```typescript
interface ZDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  size?: ZRUSizeE;
  closeButton?: boolean;
  overlay?: boolean;
  className?: string;
}
```

#### `ZModal`
Alternative modal implementation.

```typescript
interface ZModalProps extends ZDialogProps {
  footer?: React.ReactNode;
  centered?: boolean;
  destroyOnClose?: boolean;
}
```

#### `ZPopover`
Popover component for contextual information.

```typescript
interface ZPopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
}
```

#### `ZTooltip`
Tooltip component for hover information.

```typescript
interface ZTooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  delayDuration?: number;
  skipDelayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
}
```

#### `ZAlertDialog`
Alert dialog for confirmations.

```typescript
interface ZAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  actionLabel?: string;
  cancelLabel?: string;
  onAction?: () => void;
  onCancel?: () => void;
  destructive?: boolean;
}
```

#### `ZContextMenu`
Right-click context menu component.

```typescript
interface ZContextMenuProps {
  trigger: React.ReactNode;
  items: ZContextMenuItem[];
  onItemClick?: (item: ZContextMenuItem) => void;
}
```

#### `ZDropdownMenu`
Dropdown menu component.

```typescript
interface ZDropdownMenuProps {
  trigger: React.ReactNode;
  items: ZDropdownMenuItem[];
  align?: "start" | "center" | "end";
  sideOffset?: number;
}
```

#### `ZNavigationMenu`
Navigation menu component.

```typescript
interface ZNavigationMenuProps {
  items: ZNavigationMenuItem[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}
```

#### `ZHoverCard`
Card that appears on hover.

```typescript
interface ZHoverCardProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
}
```

#### `ZTabs`
Tab navigation component.

```typescript
interface ZTabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  tabs: Array<{
    value: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
  }>;
  orientation?: "horizontal" | "vertical";
  className?: string;
}
```

#### `ZToggle`
Toggle button component.

```typescript
interface ZToggleProps {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: ZRUToggleVariantE;
  size?: ZRUSizeE;
  className?: string;
}
```

#### `ZToggleGroup`
Group of toggle buttons.

```typescript
interface ZToggleGroupProps {
  type: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  items: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  variant?: ZRUToggleVariantE;
  size?: ZRUSizeE;
  className?: string;
}
```

### Layout Components

#### `ZBox`
Flexible box container component.

```typescript
interface ZRUBoxI {
  children: React.ReactNode;
  display?: ZRUBoxDisplayE;
  position?: ZRUPositionE;
  padding?: ZRUSpacingE;
  margin?: ZRUSpacingE;
  width?: ResponsiveT<string>;
  height?: ResponsiveT<string>;
  className?: string;
}
```

#### `ZFlex`
Flexbox layout component.

```typescript
interface ZFlexProps extends ZRUBoxI {
  direction?: ResponsiveT<"row" | "column" | "row-reverse" | "column-reverse">;
  align?: ResponsiveT<"start" | "center" | "end" | "stretch" | "baseline">;
  justify?: ResponsiveT<"start" | "center" | "end" | "between" | "around" | "evenly">;
  wrap?: ResponsiveT<"wrap" | "nowrap" | "wrap-reverse">;
  gap?: ResponsiveT<ZRUSpacingE>;
}
```

#### `ZGrid`
CSS Grid layout component.

```typescript
interface ZGridProps extends ZRUBoxI {
  columns?: ResponsiveT<number | string>;
  rows?: ResponsiveT<number | string>;
  gap?: ResponsiveT<ZRUSpacingE>;
  columnGap?: ResponsiveT<ZRUSpacingE>;
  rowGap?: ResponsiveT<ZRUSpacingE>;
  areas?: string[];
  autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
}
```

#### `ZContainer`
Responsive container component.

```typescript
interface ZContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  centered?: boolean;
  padding?: ResponsiveT<ZRUSpacingE>;
  className?: string;
}
```

#### `ZScrollArea`
Custom scrollable area component.

```typescript
interface ZScrollAreaProps {
  children: React.ReactNode;
  height?: string;
  width?: string;
  orientation?: "vertical" | "horizontal" | "both";
  className?: string;
}
```

#### `ZSeparator`
Separator/divider component.

```typescript
interface ZSeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  className?: string;
}
```

#### `ZAspectRatio`
Maintains aspect ratio for content.

```typescript
interface ZAspectRatioProps {
  ratio: number;
  children: React.ReactNode;
  className?: string;
}
```

### Data Display

#### `ZTable`
Advanced table component with sorting and filtering.

```typescript
interface ZTableProps<T = any> {
  data: T[];
  columns: ZTableColumn<T>[];
  onSort?: (column: string, direction: "asc" | "desc") => void;
  onFilter?: (filters: Record<string, any>) => void;
  pagination?: boolean;
  pageSize?: number;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}
```

#### `ZDataList`
List component for displaying data items.

```typescript
interface ZDataListProps<T = any> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}
```

#### `ZProgress`
Progress bar component.

```typescript
interface ZProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: ZRUProgressVariantE;
  size?: ZRUSizeE;
  className?: string;
}
```

#### `ZCalendar`
Calendar component for date selection.

```typescript
interface ZCalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  locale?: string;
  className?: string;
}
```

#### `ZDatePicker`
Date picker with calendar dropdown.

```typescript
interface ZDatePickerProps extends ZCalendarProps {
  placeholder?: string;
  format?: string;
  disabled?: boolean;
  error?: string;
}
```

#### `ZDateRangePicker`
Date range selection component.

```typescript
interface ZDateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (range: { start: Date; end: Date }) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  format?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}
```

### Utility Components

#### `ZErrorBoundary`
Error boundary component for React error handling.

```typescript
interface ZErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
```

#### `ZNetworkDisconnected`
Component displayed when network is disconnected.

```typescript
interface ZNetworkDisconnectedProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}
```

#### `ZFullPageLoader`
Full page loading spinner.

```typescript
interface ZFullPageLoaderProps {
  message?: string;
  overlay?: boolean;
  className?: string;
}
```

#### `ZAppLoader`
Application-level loader component.

```typescript
interface ZAppLoaderProps {
  loading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
```

#### `ZInfiniteScroll`
Infinite scroll component for lists.

```typescript
interface ZInfiniteScrollProps {
  children: React.ReactNode;
  hasMore: boolean;
  loader: React.ReactNode;
  next: () => void;
  endMessage?: React.ReactNode;
  scrollThreshold?: number;
  className?: string;
}
```

#### `ZLazyLoadImage`
Lazy loading image component.

```typescript
interface ZLazyLoadImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}
```

#### `ZVirtualList`
Virtualized list for performance.

```typescript
interface ZVirtualListProps<T = any> {
  items: T[];
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  height: number;
  overscan?: number;
  className?: string;
}
```

#### `ZCarousel`
Carousel/slider component.

```typescript
interface ZCarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  className?: string;
}
```

#### `ZCountdown`
Countdown timer component.

```typescript
interface ZCountdownProps {
  date: Date | number;
  onComplete?: () => void;
  renderer?: (props: CountdownRenderProps) => React.ReactNode;
  className?: string;
}
```

#### `ZEmpty`
Empty state component.

```typescript
interface ZEmptyProps {
  message?: string;
  description?: string;
  image?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}
```

#### `ZErrorMessage`
Error message display component.

```typescript
interface ZErrorMessageProps {
  error?: string | Error;
  onDismiss?: () => void;
  className?: string;
}
```

#### `ZBreadcrumb`
Breadcrumb navigation component.

```typescript
interface ZBreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  separator?: React.ReactNode;
  className?: string;
}
```

#### `ZHeading`
Typography heading component.

```typescript
interface ZHeadingProps {
  as?: ZRUHeadingAsE;
  size?: ZRUSizeE;
  weight?: ZRUWeightE;
  align?: "left" | "center" | "right";
  color?: string;
  children: React.ReactNode;
  className?: string;
}
```

#### `ZText`
Typography text component.

```typescript
interface ZTextProps {
  as?: ZRUTextAsE;
  size?: ZRUSizeE;
  weight?: ZRUWeightE;
  align?: "left" | "center" | "right";
  color?: string;
  truncate?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

#### `ZLink`
Link component with styling.

```typescript
interface ZLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  underline?: "always" | "hover" | "none";
  weight?: ZRULinkWeightE;
  color?: string;
  className?: string;
}
```

#### `ZCode`
Code display component.

```typescript
interface ZCodeProps {
  children: string;
  language?: string;
  inline?: boolean;
  copyable?: boolean;
  className?: string;
}
```

#### `ZKbd`
Keyboard key display component.

```typescript
interface ZKbdProps {
  children: string;
  size?: ZRUSizeE;
  className?: string;
}
```

#### `ZMark`
Highlighted text component.

```typescript
interface ZMarkProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}
```

#### `ZBlockquote`
Blockquote component.

```typescript
interface ZBlockquoteProps {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}
```

#### `ZList`
List component with styling.

```typescript
interface ZListProps {
  items: React.ReactNode[];
  ordered?: boolean;
  marker?: string;
  className?: string;
}
```

---

## Higher Order Components

### `NetworkDetectHOC`
HOC that wraps components to detect network connectivity.

```typescript
function NetworkDetectHOC<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P & { isOnline?: boolean }>
```

**Usage:**
```typescript
const MyComponentWithNetwork = NetworkDetectHOC(MyComponent);
// MyComponent will receive isOnline prop
```

### `ZGlobalComponentsHOC`
HOC that provides global components like popover and side menu.

```typescript
function ZGlobalComponentsHOC<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P>
```

**Features:**
- Adds global popover functionality
- Adds global side menu functionality
- Manages global state with Recoil

### `ZSafeAreaHOC`
HOC for handling safe areas on mobile devices.

```typescript
function ZSafeAreaHOC<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P & { safeAreaInsets?: SafeAreaInsets }>
```

**Usage:**
```typescript
const MyComponentWithSafeArea = ZSafeAreaHOC(MyComponent);
// MyComponent will receive safeAreaInsets prop
```

---

## Pages

### `LoginPage`
Pre-built login page component with form validation.

```typescript
interface LoginPageProps {
  onSubmit?: (values: ILoginFormData) => void | Promise<void>;
  onRegisterClick?: () => void;
  onForgotPasswordClick?: () => void;
  logo?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}
```

**Features:**
- Email and password fields
- Form validation with Zod
- Remember me checkbox
- Links to register and forgot password
- Customizable branding

### `RegisterPage`
Pre-built registration page component.

```typescript
interface RegisterPageProps {
  onSubmit?: (values: IRegisterFormData) => void | Promise<void>;
  onLoginClick?: () => void;
  logo?: React.ReactNode;
  title?: string;
  subtitle?: string;
  termsUrl?: string;
  privacyUrl?: string;
  className?: string;
}
```

**Features:**
- Full registration form
- Password strength indicator
- Terms and conditions checkbox
- Form validation
- Link to login page

### `NotFound404Page`
404 error page component.

```typescript
interface NotFound404PageProps {
  onHomeClick?: () => void;
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  className?: string;
}
```

---

## State Management

### `ZPopoverRStateAtom`
Recoil atom for managing global popover state.

```typescript
const ZPopoverRStateAtom = atom({
  key: 'ZPopoverRStateAtom',
  default: {
    isOpen: boolean;
    content: React.ReactNode;
    position: { x: number; y: number };
  }
});
```

### `ZSidebarRStateAtom`
Recoil atom for managing global sidebar state.

```typescript
const ZSidebarRStateAtom = atom({
  key: 'ZSidebarRStateAtom',
  default: {
    isOpen: boolean;
    position: 'left' | 'right';
  }
});
```

### `ZUserRolesPermissionsRStateAtom`
Recoil atom for managing user roles and permissions.

```typescript
const ZUserRolesPermissionsRStateAtom = atom({
  key: 'ZUserRolesPermissionsRStateAtom',
  default: {
    roles: string[];
    permissions: string[];
  }
});
```

---

## Types and Interfaces

### `ZGenericObject`
Generic object type for flexible data structures.

```typescript
type ZGenericObject = Record<string, any>;
```

### `ResponsiveT`
Type for responsive values across breakpoints.

```typescript
type ResponsiveT<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};
```

### `ISelectOption`
Interface for select/dropdown options.

```typescript
interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  data?: any;
}
```

### `ILoginFormData`
Login form data structure.

```typescript
interface ILoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

### `IRegisterFormData`
Registration form data structure.

```typescript
interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}
```

### `IUserAccountData`
User account data structure.

```typescript
interface IUserAccountData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Utilities

### Form Fields

#### `loginFormFields`
Pre-configured form fields for login forms.

```typescript
const loginFormFields: FormFieldConfig[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
  }
];
```

#### `registerFormFields`
Pre-configured form fields for registration forms.

```typescript
const registerFormFields: FormFieldConfig[];
```

#### `userAccountDataFormFields`
Pre-configured form fields for user account forms.

```typescript
const userAccountDataFormFields: FormFieldConfig[];
```

### Notification Functions

#### `showNotification`
Display a notification to the user.

```typescript
function showNotification(options: {
  title: string;
  message?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}): void;
```

#### `showSuccessNotification`
Display a success notification.

```typescript
function showSuccessNotification(message: string, title?: string): void;
```

#### `showErrorNotification`
Display an error notification.

```typescript
function showErrorNotification(message: string, title?: string): void;
```

### Hooks

#### `useZPopover`
Hook for managing popover state.

```typescript
function useZPopover(): {
  isOpen: boolean;
  content: React.ReactNode;
  position: { x: number; y: number };
  open: (content: React.ReactNode, position?: { x: number; y: number }) => void;
  close: () => void;
  toggle: () => void;
};
```

#### `useZSideBar`
Hook for managing sidebar state.

```typescript
function useZSideBar(): {
  isOpen: boolean;
  position: 'left' | 'right';
  open: () => void;
  close: () => void;
  toggle: () => void;
  setPosition: (position: 'left' | 'right') => void;
};
```

### Helper Functions

#### `getRemainingTimeInMilliseconds`
Calculate remaining time until a target date.

```typescript
function getRemainingTimeInMilliseconds(targetDate: Date | string | number): number;
```

#### `defaultCurrency`
Default currency configuration object.

```typescript
const defaultCurrency: {
  code: string;
  symbol: string;
  name: string;
  decimals: number;
};
```

---

## Validation Schemas

### `loginFormValidationSchema`
Zod schema for login form validation.

```typescript
const loginFormValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
});
```

### `registerFormValidationSchema`
Zod schema for registration form validation.

```typescript
const registerFormValidationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});
```

### `userAccountFormValidationSchema`
Zod schema for user account form validation.

```typescript
const userAccountFormValidationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  avatar: z.string().url('Invalid URL').optional(),
});
```

---

## Enums

### Form/UI Enums

#### `LoginFormFieldsEnum`
Enum for login form field names.

```typescript
enum LoginFormFieldsEnum {
  EMAIL = 'email',
  PASSWORD = 'password',
  REMEMBER_ME = 'rememberMe',
}
```

#### `RegisterFormFieldsEnum`
Enum for registration form field names.

```typescript
enum RegisterFormFieldsEnum {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
  AGREE_TO_TERMS = 'agreeToTerms',
}
```

#### `UserAccountDataFormFieldsEnum`
Enum for user account form field names.

```typescript
enum UserAccountDataFormFieldsEnum {
  ID = 'id',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PHONE = 'phone',
  AVATAR = 'avatar',
  ROLE = 'role',
}
```

#### `ZFormModeE`
Form mode enumeration.

```typescript
enum ZFormModeE {
  CREATE = 'create',
  EDIT = 'edit',
  VIEW = 'view',
}
```

### Radix UI Variant Enums

#### `ZRUBasicVariantE`
Basic variant options.

```typescript
enum ZRUBasicVariantE {
  SOLID = 'solid',
  SOFT = 'soft',
  SURFACE = 'surface',
  OUTLINE = 'outline',
  GHOST = 'ghost',
}
```

#### `ZRUCommonVariantE`
Common variant options including classic.

```typescript
enum ZRUCommonVariantE {
  CLASSIC = 'classic',
  SOLID = 'solid',
  SOFT = 'soft',
  SURFACE = 'surface',
  OUTLINE = 'outline',
  GHOST = 'ghost',
}
```

#### `ZRUVariantE`
Extended variant options.

```typescript
enum ZRUVariantE {
  CLASSIC = 'classic',
  SOLID = 'solid',
  SOFT = 'soft',
  SURFACE = 'surface',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  TRANSPARENT = 'transparent',
}
```

#### `ZRUTriggerVariantE`
Trigger-specific variants.

```typescript
enum ZRUTriggerVariantE {
  CLASSIC = 'classic',
  SOFT = 'soft',
  SURFACE = 'surface',
  GHOST = 'ghost',
}
```

#### `ZRUBadgeVariantE`
Badge-specific variants.

```typescript
enum ZRUBadgeVariantE {
  SOLID = 'solid',
  SOFT = 'soft',
  SURFACE = 'surface',
  OUTLINE = 'outline',
}
```

#### `ZRUProgressVariantE`
Progress bar variants.

```typescript
enum ZRUProgressVariantE {
  CLASSIC = 'classic',
  SOFT = 'soft',
  SURFACE = 'surface',
}
```

#### `ZRUToggleVariantE`
Toggle button variants.

```typescript
enum ZRUToggleVariantE {
  DEFAULT = 'default',
  OUTLINE = 'outline',
}
```

### Layout/Display Enums

#### `ZRUDisplayE`
Display property values.

```typescript
enum ZRUDisplayE {
  NONE = 'none',
  INLINE = 'inline',
  INLINE_BLOCK = 'inline-block',
  BLOCK = 'block',
  TABLE = 'table',
  TABLE_ROW = 'table-row',
  TABLE_CELL = 'table-cell',
  FLEX = 'flex',
  INLINE_FLEX = 'inline-flex',
  GRID = 'grid',
  INLINE_GRID = 'inline-grid',
}
```

#### `ZRUBoxDisplayE`
Box-specific display values.

```typescript
enum ZRUBoxDisplayE {
  NONE = 'none',
  BLOCK = 'block',
  FLEX = 'flex',
  INLINE_FLEX = 'inline-flex',
  GRID = 'grid',
  INLINE_GRID = 'inline-grid',
}
```

#### `ZRUContainerDisplayE`
Container display values.

```typescript
enum ZRUContainerDisplayE {
  BLOCK = 'block',
  FLEX = 'flex',
  GRID = 'grid',
}
```

#### `ZRUPositionE`
CSS position values.

```typescript
enum ZRUPositionE {
  STATIC = 'static',
  RELATIVE = 'relative',
  ABSOLUTE = 'absolute',
  FIXED = 'fixed',
  STICKY = 'sticky',
}
```

### Typography Enums

#### `ZRUTextAsE`
Text element types.

```typescript
enum ZRUTextAsE {
  P = 'p',
  SPAN = 'span',
  DIV = 'div',
  LABEL = 'label',
}
```

#### `ZRUHeadingAsE`
Heading element types.

```typescript
enum ZRUHeadingAsE {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}
```

#### `ZRUWeightE`
Font weight values.

```typescript
enum ZRUWeightE {
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
  BOLD = 'bold',
}
```

#### `ZRULinkWeightE`
Link-specific font weights.

```typescript
enum ZRULinkWeightE {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
  BOLD = 'bold',
}
```

### Size and Spacing Enums

#### `ZRUSizeE`
Component size options.

```typescript
enum ZRUSizeE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
}
```

#### `ZRUSpacingE`
Spacing scale values.

```typescript
enum ZRUSpacingE {
  '0' = '0',
  '1' = '1',
  '2' = '2',
  '3' = '3',
  '4' = '4',
  '5' = '5',
  '6' = '6',
  '7' = '7',
  '8' = '8',
  '9' = '9',
}
```

#### `ZRURadiusE`
Border radius values.

```typescript
enum ZRURadiusE {
  NONE = 'none',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  FULL = 'full',
}
```

### Other UI Enums

#### `ZRUAlignE`
Alignment options.

```typescript
enum ZRUAlignE {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  BASELINE = 'baseline',
  STRETCH = 'stretch',
}
```

#### `ZRUJustifyE`
Justify content options.

```typescript
enum ZRUJustifyE {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  BETWEEN = 'between',
  AROUND = 'around',
  EVENLY = 'evenly',
}
```

#### `ZRUDirectionE`
Flex direction options.

```typescript
enum ZRUDirectionE {
  ROW = 'row',
  ROW_REVERSE = 'row-reverse',
  COLUMN = 'column',
  COLUMN_REVERSE = 'column-reverse',
}
```

#### `ZRUWrapE`
Flex wrap options.

```typescript
enum ZRUWrapE {
  WRAP = 'wrap',
  NOWRAP = 'nowrap',
  WRAP_REVERSE = 'wrap-reverse',
}
```

#### `ZRUGapE`
Gap spacing options.

```typescript
enum ZRUGapE {
  '0' = '0',
  '1' = '1',
  '2' = '2',
  '3' = '3',
  '4' = '4',
  '5' = '5',
  '6' = '6',
  '7' = '7',
  '8' = '8',
  '9' = '9',
}
```

#### `ZRUOrientationE`
Component orientation.

```typescript
enum ZRUOrientationE {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}
```

#### `ZRUSideE`
Side positioning.

```typescript
enum ZRUSideE {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}
```

#### `ZRUColorE`
Theme colors.

```typescript
enum ZRUColorE {
  AMBER = 'amber',
  BLUE = 'blue',
  BRONZE = 'bronze',
  BROWN = 'brown',
  CRIMSON = 'crimson',
  CYAN = 'cyan',
  GOLD = 'gold',
  GRASS = 'grass',
  GRAY = 'gray',
  GREEN = 'green',
  INDIGO = 'indigo',
  IRIS = 'iris',
  JADE = 'jade',
  LIME = 'lime',
  MINT = 'mint',
  ORANGE = 'orange',
  PINK = 'pink',
  PLUM = 'plum',
  PURPLE = 'purple',
  RED = 'red',
  RUBY = 'ruby',
  SAGE = 'sage',
  SAND = 'sand',
  SKY = 'sky',
  SLATE = 'slate',
  TEAL = 'teal',
  TOMATO = 'tomato',
  VIOLET = 'violet',
  YELLOW = 'yellow',
}
```

#### `ZRUHighContrastE`
High contrast mode options.

```typescript
enum ZRUHighContrastE {
  FALSE = 'false',
  TRUE = 'true',
}
```

#### `ZRULoadingE`
Loading state options.

```typescript
enum ZRULoadingE {
  FALSE = 'false',
  TRUE = 'true',
}
```

---

## Data Constants

### `ZCurrenciesData`
Array of currency information objects.

```typescript
const ZCurrenciesData: Array<{
  code: string;
  symbol: string;
  name: string;
  country: string;
  decimals: number;
}>;
```

**Example:**
```typescript
[
  {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    country: 'United States',
    decimals: 2,
  },
  {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    country: 'European Union',
    decimals: 2,
  },
  // ... more currencies
]
```

---

## Usage Examples

### Basic Component Usage

```typescript
import { ZButton, ZInput, ZCard } from 'radixui-buildkit';

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <ZCard padding={ZRUSpacingE['4']}>
      <ZInput
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ZButton 
        variant={ZRUCommonVariantE.SOLID}
        onClick={() => console.log('Submit')}
      >
        Submit
      </ZButton>
    </ZCard>
  );
}
```

### Using HOCs

```typescript
import { NetworkDetectHOC, ZGlobalComponentsHOC } from 'radixui-buildkit';

const MyApp = () => {
  return <div>My Application</div>;
};

// Apply HOCs
const AppWithNetwork = NetworkDetectHOC(MyApp);
const AppWithGlobalComponents = ZGlobalComponentsHOC(AppWithNetwork);

export default AppWithGlobalComponents;
```

### Form with Validation

```typescript
import { Formik } from 'formik';
import { 
  loginFormFields, 
  loginFormValidationSchema,
  ZInput,
  ZButton 
} from 'radixui-buildkit';

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginFormValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <ZInput
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : undefined}
          />
          <ZInput
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password ? errors.password : undefined}
          />
          <ZButton type="submit">Login</ZButton>
        </form>
      )}
    </Formik>
  );
}
```

### Using State Management

```typescript
import { useRecoilState } from 'recoil';
import { ZSidebarRStateAtom, useZSideBar } from 'radixui-buildkit';

function MySidebar() {
  const { isOpen, toggle } = useZSideBar();
  
  return (
    <>
      <button onClick={toggle}>Toggle Sidebar</button>
      {isOpen && <div>Sidebar Content</div>}
    </>
  );
}
```

---

## Best Practices

1. **TypeScript**: Always use TypeScript types for better type safety
2. **Enums**: Use provided enums instead of string literals
3. **Validation**: Use Zod schemas for form validation
4. **Accessibility**: Components are built on Radix UI for accessibility
5. **Responsive**: Use ResponsiveT type for responsive props
6. **State**: Use Recoil atoms for global state management
7. **HOCs**: Apply HOCs in the correct order for optimal functionality

---

## Migration Guide

If migrating from `zaions-react-ui-kit` to `radixui-buildkit`:

1. Update package import:
   ```typescript
   // Old
   import { ZButton } from 'zaions-react-ui-kit';
   
   // New
   import { ZButton } from 'radixui-buildkit';
   ```

2. No API changes - all components maintain the same interfaces

3. Update package.json dependency:
   ```json
   {
     "dependencies": {
       "radixui-buildkit": "latest"
     }
   }
   ```

---

## Support

For issues, feature requests, or questions:
- GitHub Issues: https://github.com/aoneahsan/radixui-buildkit/issues
- Email: aoneahsan@gmail.com