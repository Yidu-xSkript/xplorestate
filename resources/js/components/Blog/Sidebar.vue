<template>
  <div class="col-md-4">
    <div class="sidebar right">
      <div class="widget">
        <h3 class="margin-top-0 margin-bottom-25">Search Blog</h3>
        <div class="search-blog-input">
          <div class="input">
            <input
              class="search-field"
              type="text"
              placeholder="Type and hit enter"
              value=""
            />
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="widget">
        <h3>Got any questions?</h3>
        <div class="info-box margin-bottom-10">
          <p>If you are having any questions, please feel free to ask.</p>
          <inertia-link
            :href="route('contact.index')"
            class="button fullwidth margin-top-20"
            ><i class="fa fa-envelope-o"></i> Drop Us a Line</inertia-link
          >
        </div>
      </div>

      <div class="widget">
        <h3>Popular Posts</h3>
        <ul class="widget-tabs">
          <li v-for="(blog, index) in blogs" :key="index">
            <div class="widget-content">
              <div class="widget-thumb">
                <inertia-link :href="route('blog.detail')"
                  ><img :src="blog.image" :alt="`blog image ${index}`"
                /></inertia-link>
              </div>

              <div class="widget-text">
                <h5>
                  <inertia-link :href="route('blog.detail')"
                    >{{ blog.title }}
                  </inertia-link>
                </h5>
                <span>{{ blog.created_at }}</span>
              </div>
              <div class="clearfix"></div>
            </div>
          </li>
        </ul>
      </div>

      <div class="widget">
        <h3 class="margin-top-0 margin-bottom-25">Social</h3>
        <ul class="social-icons rounded">
          <li>
            <a class="facebook" href="#"><i class="icon-facebook"></i></a>
          </li>
          <li>
            <a class="twitter" href="#"><i class="icon-twitter"></i></a>
          </li>
          <li>
            <a class="gplus" href="#"><i class="icon-gplus"></i></a>
          </li>
          <li>
            <a class="linkedin" href="#"><i class="icon-linkedin"></i></a>
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
      <div class="margin-bottom-40"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog Sidebar",
  props: {
    blogs: {
      type: Array,
      default: [],
      required: true,
    },
  },
};
</script>

<style>
</style>