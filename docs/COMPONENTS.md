# RadixUI BuildKit - Component Examples

This document provides detailed examples for all components in the RadixUI BuildKit library.

## Table of Contents

- [Form Components](#form-components)
- [UI Elements](#ui-elements)
- [Layout Components](#layout-components)
- [Data Display](#data-display)
- [Utility Components](#utility-components)
- [Higher Order Components](#higher-order-components)
- [Pre-built Pages](#pre-built-pages)

---

## Form Components

### Basic Input Example

```tsx
import React, { useState } from 'react';
import { ZInput, ZRUBasicVariantE, ZRUSizeE } from 'radixui-buildkit';

function InputExample() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleValidation = (val: string) => {
    if (val.length < 3) {
      setError('Minimum 3 characters required');
    } else {
      setError('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Basic Input */}
      <ZInput
        placeholder="Enter your name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleValidation(e.target.value);
        }}
        error={error}
      />

      {/* Different Variants */}
      <ZInput
        placeholder="Solid variant"
        variant={ZRUBasicVariantE.SOLID}
      />
      
      <ZInput
        placeholder="Outline variant"
        variant={ZRUBasicVariantE.OUTLINE}
      />

      {/* Different Sizes */}
      <ZInput
        placeholder="Small input"
        size={ZRUSizeE.SM}
      />
      
      <ZInput
        placeholder="Large input"
        size={ZRUSizeE.LG}
      />

      {/* Disabled State */}
      <ZInput
        placeholder="Disabled input"
        disabled
        value="Cannot edit this"
      />
    </div>
  );
}
```

### Form with Multiple Fields

```tsx
import React from 'react';
import { Formik } from 'formik';
import { z } from 'zod';
import {
  ZInput,
  ZTextArea,
  ZSelect,
  ZCheckbox,
  ZRadioGroup,
  ZSwitch,
  ZButton,
  ISelectOption,
  ZRUCommonVariantE
} from 'radixui-buildkit';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string(),
  bio: z.string().max(500),
  newsletter: z.boolean(),
  gender: z.enum(['male', 'female', 'other']),
  notifications: z.boolean()
});

function CompleteFormExample() {
  const countries: ISelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' }
  ];

  const genderOptions: ISelectOption[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        country: '',
        bio: '',
        newsletter: false,
        gender: '',
        notifications: true
      }}
      validate={(values) => {
        try {
          schema.parse(values);
          return {};
        } catch (error) {
          if (error instanceof z.ZodError) {
            return error.flatten().fieldErrors;
          }
          return {};
        }
      }}
      onSubmit={(values) => {
        console.log('Form submitted:', values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <ZInput
            name="name"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name ? errors.name?.[0] : undefined}
            required
          />

          <ZInput
            name="email"
            type="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email?.[0] : undefined}
            required
          />

          <ZSelect
            name="country"
            placeholder="Select Country"
            options={countries}
            value={countries.find(c => c.value === values.country)}
            onChange={(option) => setFieldValue('country', option?.value)}
            error={touched.country ? errors.country?.[0] : undefined}
            required
          />

          <ZTextArea
            name="bio"
            placeholder="Tell us about yourself"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bio ? errors.bio?.[0] : undefined}
            rows={4}
          />

          <ZRadioGroup
            name="gender"
            options={genderOptions}
            value={values.gender}
            onChange={(value) => setFieldValue('gender', value)}
            error={touched.gender ? errors.gender?.[0] : undefined}
            required
          />

          <ZCheckbox
            name="newsletter"
            checked={values.newsletter}
            onChange={(checked) => setFieldValue('newsletter', checked)}
            label="Subscribe to newsletter"
          />

          <ZSwitch
            name="notifications"
            checked={values.notifications}
            onChange={(checked) => setFieldValue('notifications', checked)}
            label="Enable notifications"
          />

          <ZButton
            type="submit"
            variant={ZRUCommonVariantE.SOLID}
            fullWidth
          >
            Submit Form
          </ZButton>
        </form>
      )}
    </Formik>
  );
}
```

### Amount Input with Currency

```tsx
import React, { useState } from 'react';
import { ZAmountInput, ZPrizeInput } from 'radixui-buildkit';

function MoneyInputExample() {
  const [amount, setAmount] = useState('1000.50');
  const [prize, setPrize] = useState('500');

  return (
    <div className="space-y-4">
      {/* Basic Amount Input */}
      <ZAmountInput
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        currency="$"
        currencyPosition="left"
        thousandSeparator
        decimalPlaces={2}
        placeholder="Enter amount"
      />

      {/* Prize Input with Validation */}
      <ZPrizeInput
        value={prize}
        onChange={(e) => setPrize(e.target.value)}
        minPrize={100}
        maxPrize={10000}
        showPrizeIcon
        error={Number(prize) < 100 ? 'Minimum prize is $100' : undefined}
      />
    </div>
  );
}
```

---

## UI Elements

### Button Examples

```tsx
import React from 'react';
import {
  ZButton,
  ZRUCommonVariantE,
  ZRUSizeE
} from 'radixui-buildkit';

function ButtonExamples() {
  return (
    <div className="space-y-4">
      {/* Variants */}
      <div className="flex gap-2">
        <ZButton variant={ZRUCommonVariantE.SOLID}>
          Solid
        </ZButton>
        <ZButton variant={ZRUCommonVariantE.SOFT}>
          Soft
        </ZButton>
        <ZButton variant={ZRUCommonVariantE.OUTLINE}>
          Outline
        </ZButton>
        <ZButton variant={ZRUCommonVariantE.GHOST}>
          Ghost
        </ZButton>
      </div>

      {/* Sizes */}
      <div className="flex gap-2 items-center">
        <ZButton size={ZRUSizeE.SM}>Small</ZButton>
        <ZButton size={ZRUSizeE.MD}>Medium</ZButton>
        <ZButton size={ZRUSizeE.LG}>Large</ZButton>
      </div>

      {/* With Icons */}
      <div className="flex gap-2">
        <ZButton
          icon={<span>📤</span>}
          iconPosition="left"
        >
          Upload
        </ZButton>
        <ZButton
          icon={<span>➡️</span>}
          iconPosition="right"
        >
          Next
        </ZButton>
      </div>

      {/* States */}
      <div className="flex gap-2">
        <ZButton loading>
          Loading...
        </ZButton>
        <ZButton disabled>
          Disabled
        </ZButton>
      </div>

      {/* Full Width */}
      <ZButton fullWidth variant={ZRUCommonVariantE.SOLID}>
        Full Width Button
      </ZButton>
    </div>
  );
}
```

### Dialog and Modal Examples

```tsx
import React, { useState } from 'react';
import {
  ZDialog,
  ZModal,
  ZAlertDialog,
  ZButton,
  ZRUCommonVariantE
} from 'radixui-buildkit';

function DialogExamples() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Basic Dialog */}
      <ZButton onClick={() => setDialogOpen(true)}>
        Open Dialog
      </ZButton>
      
      <ZDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Dialog Title"
        description="This is a dialog description"
      >
        <div className="p-4">
          <p>Dialog content goes here</p>
          <ZButton onClick={() => setDialogOpen(false)}>
            Close
          </ZButton>
        </div>
      </ZDialog>

      {/* Modal with Footer */}
      <ZButton onClick={() => setModalOpen(true)}>
        Open Modal
      </ZButton>
      
      <ZModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Modal Title"
        description="Modal with custom footer"
        footer={
          <div className="flex gap-2 justify-end">
            <ZButton
              variant={ZRUCommonVariantE.OUTLINE}
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </ZButton>
            <ZButton
              variant={ZRUCommonVariantE.SOLID}
              onClick={() => {
                console.log('Confirmed');
                setModalOpen(false);
              }}
            >
              Confirm
            </ZButton>
          </div>
        }
      >
        <div className="p-4">
          <p>Modal content with footer actions</p>
        </div>
      </ZModal>

      {/* Alert Dialog */}
      <ZButton
        variant={ZRUCommonVariantE.OUTLINE}
        onClick={() => setAlertOpen(true)}
      >
        Delete Item
      </ZButton>
      
      <ZAlertDialog
        open={alertOpen}
        onOpenChange={setAlertOpen}
        title="Delete Confirmation"
        description="Are you sure you want to delete this item? This action cannot be undone."
        actionLabel="Delete"
        cancelLabel="Cancel"
        destructive
        onAction={() => {
          console.log('Item deleted');
          setAlertOpen(false);
        }}
        onCancel={() => setAlertOpen(false)}
      />
    </div>
  );
}
```

### Popover and Tooltip Examples

```tsx
import React from 'react';
import {
  ZPopover,
  ZTooltip,
  ZHoverCard,
  ZButton,
  ZText
} from 'radixui-buildkit';

function PopoverExamples() {
  return (
    <div className="space-y-8">
      {/* Popover */}
      <ZPopover
        trigger={<ZButton>Click for Popover</ZButton>}
        content={
          <div className="p-4 w-64">
            <h4 className="font-semibold mb-2">Popover Content</h4>
            <p className="text-sm">
              This is a popover with rich content. You can put any React component here.
            </p>
          </div>
        }
        placement="bottom"
        align="start"
      />

      {/* Tooltip */}
      <ZTooltip
        content="This is a helpful tooltip"
        delayDuration={200}
      >
        <ZButton>Hover for Tooltip</ZButton>
      </ZTooltip>

      {/* Hover Card */}
      <ZHoverCard
        trigger={
          <span className="underline cursor-pointer">
            Hover for more info
          </span>
        }
        content={
          <div className="p-4 w-80">
            <h4 className="font-semibold mb-2">Detailed Information</h4>
            <ZText>
              This is a hover card that appears when you hover over the trigger.
              It's great for showing additional context without cluttering the UI.
            </ZText>
          </div>
        }
      />
    </div>
  );
}
```

### Badge and Avatar Examples

```tsx
import React from 'react';
import {
  ZBadge,
  ZAvatar,
  ZRUBadgeVariantE,
  ZRUSizeE
} from 'radixui-buildkit';

function BadgeAvatarExamples() {
  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex gap-2">
        <ZBadge variant={ZRUBadgeVariantE.SOLID}>
          New
        </ZBadge>
        <ZBadge variant={ZRUBadgeVariantE.SOFT} color="green">
          Active
        </ZBadge>
        <ZBadge variant={ZRUBadgeVariantE.OUTLINE} color="red">
          Urgent
        </ZBadge>
        <ZBadge variant={ZRUBadgeVariantE.SURFACE} rounded>
          42
        </ZBadge>
      </div>

      {/* Avatars */}
      <div className="flex gap-4 items-center">
        <ZAvatar
          src="https://via.placeholder.com/150"
          alt="User"
          size={ZRUSizeE.SM}
        />
        <ZAvatar
          src="https://via.placeholder.com/150"
          alt="User"
          size={ZRUSizeE.MD}
          status="online"
        />
        <ZAvatar
          fallback="JD"
          size={ZRUSizeE.LG}
          shape="square"
        />
        <ZAvatar
          src="broken-url.jpg"
          fallback="AB"
          size={ZRUSizeE.XL}
          status="away"
        />
      </div>
    </div>
  );
}
```

---

## Layout Components

### Flex Layout Example

```tsx
import React from 'react';
import {
  ZFlex,
  ZBox,
  ZCard,
  ZRUSpacingE,
  ZRUJustifyE,
  ZRUAlignE
} from 'radixui-buildkit';

function FlexLayoutExample() {
  return (
    <ZFlex
      direction={{ base: 'column', md: 'row' }}
      gap={ZRUSpacingE['4']}
      justify={ZRUJustifyE.BETWEEN}
      align={ZRUAlignE.CENTER}
      className="p-4"
    >
      <ZCard className="p-4">
        <h3>Card 1</h3>
        <p>Flex child</p>
      </ZCard>
      
      <ZCard className="p-4">
        <h3>Card 2</h3>
        <p>Flex child</p>
      </ZCard>
      
      <ZCard className="p-4">
        <h3>Card 3</h3>
        <p>Flex child</p>
      </ZCard>
    </ZFlex>
  );
}
```

### Grid Layout Example

```tsx
import React from 'react';
import {
  ZGrid,
  ZCard,
  ZRUSpacingE
} from 'radixui-buildkit';

function GridLayoutExample() {
  return (
    <ZGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      gap={ZRUSpacingE['4']}
      className="p-4"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <ZCard key={item} className="p-4">
          <h3>Item {item}</h3>
          <p>Grid item content</p>
        </ZCard>
      ))}
    </ZGrid>
  );
}
```

### Container with Scroll Area

```tsx
import React from 'react';
import {
  ZContainer,
  ZScrollArea,
  ZSeparator,
  ZText
} from 'radixui-buildkit';

function ScrollAreaExample() {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return (
    <ZContainer size="md" centered>
      <h2 className="text-2xl font-bold mb-4">Scrollable List</h2>
      
      <ZScrollArea height="400px" className="border rounded">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <div className="p-4">
              <ZText>{item}</ZText>
            </div>
            {index < items.length - 1 && <ZSeparator />}
          </React.Fragment>
        ))}
      </ZScrollArea>
    </ZContainer>
  );
}
```

---

## Data Display

### Table Example

```tsx
import React, { useState } from 'react';
import {
  ZTable,
  ZTableColumn,
  ZBadge,
  ZRUBadgeVariantE
} from 'radixui-buildkit';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

function TableExample() {
  const [data] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  ]);

  const columns: ZTableColumn<User>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      header: 'Email',
      sortable: true,
    },
    {
      key: 'role',
      header: 'Role',
      render: (user) => (
        <ZBadge variant={ZRUBadgeVariantE.SOFT}>
          {user.role}
        </ZBadge>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (user) => (
        <ZBadge
          variant={ZRUBadgeVariantE.SOFT}
          color={user.status === 'active' ? 'green' : 'gray'}
        >
          {user.status}
        </ZBadge>
      ),
    },
  ];

  return (
    <ZTable
      data={data}
      columns={columns}
      onSort={(column, direction) => {
        console.log(`Sorting by ${column} ${direction}`);
      }}
      pagination
      pageSize={10}
    />
  );
}
```

### Progress Bar Examples

```tsx
import React from 'react';
import {
  ZProgress,
  ZRUProgressVariantE,
  ZRUSizeE
} from 'radixui-buildkit';

function ProgressExamples() {
  return (
    <div className="space-y-4">
      {/* Basic Progress */}
      <ZProgress value={60} label="Progress" showValue />

      {/* Different Variants */}
      <ZProgress
        value={75}
        variant={ZRUProgressVariantE.SOFT}
        label="Soft Variant"
        showValue
      />

      {/* Different Sizes */}
      <ZProgress
        value={45}
        size={ZRUSizeE.SM}
        label="Small"
      />
      <ZProgress
        value={80}
        size={ZRUSizeE.LG}
        label="Large"
      />

      {/* Custom Max Value */}
      <ZProgress
        value={150}
        max={200}
        label="Custom Max"
        showValue
      />
    </div>
  );
}
```

### Calendar and Date Picker

```tsx
import React, { useState } from 'react';
import {
  ZCalendar,
  ZDatePicker,
  ZDateRangePicker
} from 'radixui-buildkit';

function DatePickerExamples() {
  const [date, setDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date(),
    end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
  });

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div>
        <h3 className="mb-2">Calendar</h3>
        <ZCalendar
          value={date}
          onChange={setDate}
          minDate={new Date()}
        />
      </div>

      {/* Date Picker */}
      <div>
        <h3 className="mb-2">Date Picker</h3>
        <ZDatePicker
          value={date}
          onChange={setDate}
          placeholder="Select date"
          format="MM/DD/YYYY"
        />
      </div>

      {/* Date Range Picker */}
      <div>
        <h3 className="mb-2">Date Range Picker</h3>
        <ZDateRangePicker
          startDate={dateRange.start}
          endDate={dateRange.end}
          onChange={setDateRange}
          placeholder="Select date range"
        />
      </div>
    </div>
  );
}
```

---

## Utility Components

### Loading States

```tsx
import React, { useState } from 'react';
import {
  ZFullPageLoader,
  ZAppLoader,
  ZButton,
  ZCard
} from 'radixui-buildkit';

function LoadingExamples() {
  const [loading, setLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);

  return (
    <div className="space-y-4">
      {/* Full Page Loader */}
      <ZButton onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
      }}>
        Show Full Page Loader
      </ZButton>
      
      {loading && (
        <ZFullPageLoader
          message="Loading, please wait..."
          overlay
        />
      )}

      {/* App Loader */}
      <ZButton onClick={() => {
        setAppLoading(true);
        setTimeout(() => setAppLoading(false), 3000);
      }}>
        Toggle App Loading
      </ZButton>

      <ZAppLoader
        loading={appLoading}
        fallback={
          <div className="p-8 text-center">
            <div className="spinner" />
            <p>Loading application...</p>
          </div>
        }
      >
        <ZCard className="p-4">
          <h3>App Content</h3>
          <p>This content is shown when not loading</p>
        </ZCard>
      </ZAppLoader>
    </div>
  );
}
```

### Error Handling

```tsx
import React, { useState } from 'react';
import {
  ZErrorBoundary,
  ZErrorMessage,
  ZNetworkDisconnected,
  ZButton
} from 'radixui-buildkit';

// Component that throws error
function BuggyComponent() {
  const [shouldError, setShouldError] = useState(false);
  
  if (shouldError) {
    throw new Error('Something went wrong!');
  }
  
  return (
    <div>
      <p>This component is working fine</p>
      <ZButton onClick={() => setShouldError(true)}>
        Trigger Error
      </ZButton>
    </div>
  );
}

function ErrorHandlingExample() {
  const [error, setError] = useState<string | null>(null);
  const [networkError, setNetworkError] = useState(false);

  return (
    <div className="space-y-6">
      {/* Error Boundary */}
      <ZErrorBoundary
        fallback={({ error, resetError }) => (
          <div className="p-4 border border-red-300 rounded">
            <h3 className="text-red-600 font-semibold">Error Caught!</h3>
            <p>{error.message}</p>
            <ZButton onClick={resetError} className="mt-2">
              Reset
            </ZButton>
          </div>
        )}
        onError={(error, errorInfo) => {
          console.error('Error boundary caught:', error, errorInfo);
        }}
      >
        <BuggyComponent />
      </ZErrorBoundary>

      {/* Error Message */}
      <div>
        <ZButton onClick={() => setError('This is an error message')}>
          Show Error Message
        </ZButton>
        
        {error && (
          <ZErrorMessage
            error={error}
            onDismiss={() => setError(null)}
          />
        )}
      </div>

      {/* Network Disconnected */}
      <div>
        <ZButton onClick={() => setNetworkError(!networkError)}>
          Toggle Network Error
        </ZButton>
        
        {networkError && (
          <ZNetworkDisconnected
            message="No internet connection"
            onRetry={() => {
              console.log('Retrying...');
              setNetworkError(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
```

### Typography Components

```tsx
import React from 'react';
import {
  ZHeading,
  ZText,
  ZLink,
  ZCode,
  ZKbd,
  ZMark,
  ZBlockquote,
  ZList,
  ZRUHeadingAsE,
  ZRUTextAsE,
  ZRUWeightE,
  ZRUSizeE
} from 'radixui-buildkit';

function TypographyExamples() {
  return (
    <div className="space-y-6">
      {/* Headings */}
      <div className="space-y-2">
        <ZHeading as={ZRUHeadingAsE.H1} size={ZRUSizeE['3XL']}>
          H1 Heading
        </ZHeading>
        <ZHeading as={ZRUHeadingAsE.H2} size={ZRUSizeE['2XL']}>
          H2 Heading
        </ZHeading>
        <ZHeading as={ZRUHeadingAsE.H3} size={ZRUSizeE.XL}>
          H3 Heading
        </ZHeading>
      </div>

      {/* Text */}
      <div className="space-y-2">
        <ZText size={ZRUSizeE.SM} color="gray">
          Small gray text
        </ZText>
        <ZText weight={ZRUWeightE.BOLD}>
          Bold text
        </ZText>
        <ZText truncate className="max-w-xs">
          This is a very long text that will be truncated with ellipsis
        </ZText>
      </div>

      {/* Links */}
      <div className="space-y-2">
        <ZLink href="#" underline="always">
          Always underlined link
        </ZLink>
        <ZLink href="#" underline="hover" weight={ZRUWeightE.SEMIBOLD}>
          Hover to underline
        </ZLink>
        <ZLink href="https://example.com" external>
          External link ↗
        </ZLink>
      </div>

      {/* Code */}
      <div className="space-y-2">
        <p>
          Inline code: <ZCode inline>const foo = 'bar';</ZCode>
        </p>
        <ZCode language="javascript" copyable>
          {`function hello() {
  console.log('Hello, world!');
}`}
        </ZCode>
      </div>

      {/* Other Typography */}
      <div className="space-y-4">
        <p>
          Press <ZKbd>Ctrl</ZKbd> + <ZKbd>C</ZKbd> to copy
        </p>
        
        <p>
          This text has <ZMark>highlighted content</ZMark> in it
        </p>
        
        <ZBlockquote cite="Author Name">
          This is a blockquote with some important message
        </ZBlockquote>
        
        <ZList
          items={[
            'First item',
            'Second item',
            'Third item'
          ]}
        />
      </div>
    </div>
  );
}
```

---

## Higher Order Components

### Network Detection HOC

```tsx
import React from 'react';
import { NetworkDetectHOC, ZCard, ZBadge } from 'radixui-buildkit';

interface MyComponentProps {
  isOnline?: boolean;
}

function MyComponent({ isOnline }: MyComponentProps) {
  return (
    <ZCard className="p-4">
      <h3>Network Status Demo</h3>
      <p>Current status: {' '}
        <ZBadge color={isOnline ? 'green' : 'red'}>
          {isOnline ? 'Online' : 'Offline'}
        </ZBadge>
      </p>
    </ZCard>
  );
}

// Wrap with HOC
const MyComponentWithNetwork = NetworkDetectHOC(MyComponent);

// Usage
function App() {
  return <MyComponentWithNetwork />;
}
```

### Global Components HOC

```tsx
import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  ZGlobalComponentsHOC,
  useZPopover,
  useZSideBar,
  ZButton,
  ZCard
} from 'radixui-buildkit';

function MyApp() {
  const { open: openPopover } = useZPopover();
  const { toggle: toggleSidebar } = useZSideBar();

  return (
    <div className="p-4">
      <ZButton onClick={() => openPopover(
        <ZCard className="p-4">
          <h3>Popover Content</h3>
          <p>This is a global popover!</p>
        </ZCard>
      )}>
        Open Global Popover
      </ZButton>

      <ZButton onClick={toggleSidebar}>
        Toggle Sidebar
      </ZButton>
    </div>
  );
}

// Wrap with HOC
const AppWithGlobalComponents = ZGlobalComponentsHOC(MyApp);

// Usage with RecoilRoot
function App() {
  return (
    <RecoilRoot>
      <AppWithGlobalComponents />
    </RecoilRoot>
  );
}
```

### Safe Area HOC

```tsx
import React from 'react';
import { ZSafeAreaHOC, ZContainer } from 'radixui-buildkit';

interface MyMobileComponentProps {
  safeAreaInsets?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

function MyMobileComponent({ safeAreaInsets }: MyMobileComponentProps) {
  return (
    <ZContainer
      style={{
        paddingTop: safeAreaInsets?.top || 0,
        paddingBottom: safeAreaInsets?.bottom || 0,
      }}
    >
      <h1>Mobile App Content</h1>
      <p>This content respects safe areas on mobile devices</p>
    </ZContainer>
  );
}

// Wrap with HOC
const MyMobileComponentWithSafeArea = ZSafeAreaHOC(MyMobileComponent);

// Usage
function MobileApp() {
  return <MyMobileComponentWithSafeArea />;
}
```

---

## Pre-built Pages

### Login Page

```tsx
import React from 'react';
import { LoginPage } from 'radixui-buildkit';
import { useNavigate } from 'react-router-dom';

function LoginExample() {
  const navigate = useNavigate();

  return (
    <LoginPage
      logo={<img src="/logo.png" alt="Company Logo" className="h-12" />}
      title="Welcome Back"
      subtitle="Sign in to continue to your account"
      onSubmit={async (values) => {
        console.log('Login submitted:', values);
        // Perform login logic here
        await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify(values),
        });
        navigate('/dashboard');
      }}
      onRegisterClick={() => navigate('/register')}
      onForgotPasswordClick={() => navigate('/forgot-password')}
    />
  );
}
```

### Register Page

```tsx
import React from 'react';
import { RegisterPage } from 'radixui-buildkit';
import { useNavigate } from 'react-router-dom';

function RegisterExample() {
  const navigate = useNavigate();

  return (
    <RegisterPage
      logo={<img src="/logo.png" alt="Company Logo" className="h-12" />}
      title="Create Account"
      subtitle="Join us today"
      termsUrl="/terms"
      privacyUrl="/privacy"
      onSubmit={async (values) => {
        console.log('Registration submitted:', values);
        // Perform registration logic here
        await fetch('/api/register', {
          method: 'POST',
          body: JSON.stringify(values),
        });
        navigate('/welcome');
      }}
      onLoginClick={() => navigate('/login')}
    />
  );
}
```

### 404 Page

```tsx
import React from 'react';
import { NotFound404Page } from 'radixui-buildkit';
import { useNavigate } from 'react-router-dom';

function NotFoundExample() {
  const navigate = useNavigate();

  return (
    <NotFound404Page
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      showHomeButton
      onHomeClick={() => navigate('/')}
    />
  );
}
```

---

## Complete App Example

Here's a complete example combining multiple components:

```tsx
import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  NetworkDetectHOC,
  ZGlobalComponentsHOC,
  ZContainer,
  ZFlex,
  ZCard,
  ZButton,
  ZInput,
  ZTable,
  ZBadge,
  useZPopover,
  ZRUCommonVariantE,
  ZRUSpacingE
} from 'radixui-buildkit';

interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

function Dashboard({ isOnline }: { isOnline?: boolean }) {
  const { open: openPopover } = useZPopover();
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ZContainer size="xl" padding={ZRUSpacingE['4']}>
      <ZFlex direction="column" gap={ZRUSpacingE['4']}>
        {/* Header */}
        <ZCard className="p-4">
          <ZFlex justify="between" align="center">
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <ZBadge color={isOnline ? 'green' : 'red'}>
              {isOnline ? 'Online' : 'Offline'}
            </ZBadge>
          </ZFlex>
        </ZCard>

        {/* Search */}
        <ZCard className="p-4">
          <ZInput
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </ZCard>

        {/* Users Table */}
        <ZCard className="p-4">
          <ZTable
            data={filteredUsers}
            columns={[
              { key: 'name', header: 'Name' },
              { key: 'email', header: 'Email' },
              {
                key: 'status',
                header: 'Status',
                render: (user) => (
                  <ZBadge color={user.status === 'active' ? 'green' : 'gray'}>
                    {user.status}
                  </ZBadge>
                ),
              },
              {
                key: 'actions',
                header: 'Actions',
                render: (user) => (
                  <ZButton
                    size="sm"
                    variant={ZRUCommonVariantE.OUTLINE}
                    onClick={() => openPopover(
                      <div className="p-4">
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    )}
                  >
                    View
                  </ZButton>
                ),
              },
            ]}
          />
        </ZCard>
      </ZFlex>
    </ZContainer>
  );
}

// Apply HOCs
const DashboardWithNetwork = NetworkDetectHOC(Dashboard);
const DashboardWithGlobal = ZGlobalComponentsHOC(DashboardWithNetwork);

// Main App
export function App() {
  return (
    <RecoilRoot>
      <DashboardWithGlobal />
    </RecoilRoot>
  );
}
```

---

This documentation covers all the major components with practical examples. Each example is self-contained and demonstrates real-world usage patterns.