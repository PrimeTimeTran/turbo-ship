<script></script>
<template>
  <div class="space-x-2 p-2 m-2">
    <h1>Colors Branded</h1>
    <button class="btn">Button</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Colors Branded Active</h1>
    <button class="btn btn-active">Default</button>
    <button class="btn btn-active btn-neutral">Neutral</button>
    <button class="btn btn-active btn-primary">Primary</button>
    <button class="btn btn-active btn-secondary">Secondary</button>
    <button class="btn btn-active btn-accent">Accent</button>
    <button class="btn btn-active btn-ghost">Ghost</button>
    <button class="btn btn-active btn-link">Link</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Colors State</h1>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-error">Error</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Outline</h1>
    <button class="btn btn-outline">Default</button>
    <button class="btn btn-outline btn-primary">Primary</button>
    <button class="btn btn-outline btn-secondary">Secondary</button>
    <button class="btn btn-outline btn-accent">Accent</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Outline with State colors</h1>
    <button class="btn btn-outline btn-info">Info</button>
    <button class="btn btn-outline btn-success">Success</button>
    <button class="btn btn-outline btn-warning">Warning</button>
    <button class="btn btn-outline btn-error">Error</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Sizes</h1>
    <button class="btn btn-lg">Large</button>
    <button class="btn">Normal</button>
    <button class="btn btn-sm">Small</button>
    <button class="btn btn-xs">Tiny</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Wide</h1>
    <button class="btn btn-wide">Wide</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Glass</h1>
    <button class="btn glass">Glass button</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>HTML Tags</h1>
    <a role="button" class="btn">Link</a>
    <button type="submit" class="btn">Button</button>
    <input type="button" value="Input" class="btn" />
    <input type="submit" value="Submit" class="btn" />
    <input type="radio" aria-label="Radio" class="btn" />
    <input type="checkbox" aria-label="Checkbox" class="btn" />
    <input type="reset" value="Reset" class="btn" />
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Disabled</h1>
    <button class="btn" disabled="disabled">Disabled using attribute</button>
    <button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">Disabled using class name</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Square</h1>
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <button class="btn btn-square btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Circle</h1>
    <button class="btn btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <button class="btn btn-circle btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Icon Start</h1>
    <button class="btn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      Button
    </button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Icon End</h1>
    <button class="btn">
      Button
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Block</h1>
    <button class="btn btn-block">block</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Loading Spinner</h1>
    <button class="btn btn-square">
      <span class="loading loading-spinner"></span>
    </button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Loading Spinner with text</h1>
    <button class="btn">
      <span class="loading loading-spinner"></span>
      loading
    </button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Button without click</h1>
    <button class="btn no-animation">I don't have click animation</button>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1></h1>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1></h1>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1></h1>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1></h1>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1></h1>
  </div>
</template>
