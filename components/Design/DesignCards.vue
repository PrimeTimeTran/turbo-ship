<script></script>
<template>
  <h1>Cards</h1>

  <div class="space-x-2 p-2 m-2">
    <h1>Card</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Compact</h1>
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>With badge</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Bottom image</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Centered content & padding</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Image overlay</h1>
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>No image</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Custom color</h1>
    <div class="card w-96 bg-primary text-primary-content">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Centered card with neutral color</h1>
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Accept</button>
          <button class="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>With action on top</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="card-actions justify-end">
          <button class="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p>We are using cookies for no reason.</p>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>With glass</h1>
    <div class="card w-96 glass">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
      <div class="card-body">
        <h2 class="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Image on side</h1>
    <div class="card card-side bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  </div>
  <div class="space-x-2 p-2 m-2">
    <h1>Responsive(vertical mobile & horizontal on desktop)</h1>
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
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
