<template>
  <div>
    <div class="columns">
      <div class="column is-4">
        <h2 class="subtitle is-6">Contact us and we'll get back to you within 24 hours.</h2>

        <p class="mb-2">patna, India</p>
        <p class="mb-2">+91 7564069358</p>
        <p>utkarsh09singh@.com</p>
      </div>
      <div class="column is-8">
        <form>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Enter Your Full Name" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="email" placeholder="Enter E-mail Address" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea rows="5" class="textarea" placeholder="Enter your message"></textarea>
            </div>
          </div>
          <button class="button button is-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>