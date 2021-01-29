<template>
  <teleport to="head">
      <title>Contact Us | Xplorestate</title>
  </teleport>
  <div class="contact-map margin-bottom-55">
    <div class="google-map-container">
      <l-map ref="contactMap" v-model:zoom="zoom" :center="[9.0144768, 38.7579904]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[9.0144768, 38.7579904]">
          <l-tooltip> Megenagna, DHL, cobblestone, 1st door </l-tooltip>
        </l-marker>
      </l-map>
    </div>

    <div class="address-box-container">
      <div
        class="address-container"
        data-background-image="images/our-office.jpg"
      >
        <div class="office-address">
          <h3>Our Office</h3>
          <ul>
            <li>45 Park Avenue, Apt. 303</li>
            <li>New York, NY 10016</li>
            <li>Phone (123) 123-456</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4 class="headline margin-bottom-30">Find Us There</h4>

        <div class="sidebar-textbox">
          <p>
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers. Objectively seize scalable metrics whereas proactive
            e-services.
          </p>

          <ul class="contact-details">
            <li>
              <i class="im im-icon-Phone-2"></i> <strong>Phone:</strong>
              <span>(123) 123-456 </span>
            </li>
            <li>
              <i class="im im-icon-Fax"></i> <strong>Fax:</strong>
              <span>(123) 123-456 </span>
            </li>
            <li>
              <i class="im im-icon-Globe"></i> <strong>Web:</strong>
              <span><a href="#">www.example.com</a></span>
            </li>
            <li>
              <i class="im im-icon-Envelope"></i> <strong>E-Mail:</strong>
              <span><a href="#">office@example.com</a></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-md-8">
        <section id="contact">
          <h4 class="headline margin-bottom-35">Contact Form</h4>

          <div id="contact-message"></div>

          <form
            method="post"
            action="http://www.vasterad.com/themes/findeo_updated/contact.php"
            name="contactform"
            id="contactform"
            autocomplete="on"
          >
            <div class="row">
              <div class="col-md-6">
                <div>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
                    required="required"
                  />
                </div>
              </div>
            </div>

            <div>
              <input
                name="subject"
                type="text"
                id="subject"
                placeholder="Subject"
                required="required"
              />
            </div>

            <div>
              <textarea
                name="comments"
                cols="40"
                rows="3"
                id="comments"
                placeholder="Message"
                spellcheck="true"
                required="required"
              ></textarea>
            </div>

            <input
              type="submit"
              class="submit button"
              id="submit"
              value="Submit Message"
            />
          </form>
        </section>
      </div>
    </div>
  </div>

  <div class="margin-top-55"></div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
} from "@vue-leaflet/vue-leaflet/dist/vue-leaflet.esm";
export default {
  components: { LMap, LTileLayer, LMarker, LTooltip, LPopup },
  data: () => ({
    zoom: 16
  })
};
</script>

<style>
</style>
