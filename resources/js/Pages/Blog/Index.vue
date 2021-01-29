<template>
  <teleport to="head">
    <title>Blog | Xplorestate</title>
  </teleport>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Blog</h2>
          <span>Keep up to date with the latest news</span>
          <nav id="breadcrumbs">
            <ul>
              <li><inertia-link :href="route('home')">Home</inertia-link></li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="blog-page">
      <div class="row">
        <div class="col-md-8">
          <div class="blog-post" v-for="(blog, index) in blogs" :key="index">
            <inertia-link :href="route('blog.detail')" class="post-img">
              <img :src="blog.image" alt="" />
            </inertia-link>

            <div class="post-content">
              <h3>
                <inertia-link :href="route('blog.detail')">{{
                  blog.title
                }}</inertia-link>
              </h3>

              <ul class="post-meta">
                <li>{{ blog.created_at }}</li>
              </ul>
              <p>
                {{ blog.description }}
              </p>
              <inertia-link :href="route('blog.detail')" class="read-more"
                >Read More <i class="fa fa-angle-right"></i
              ></inertia-link>
            </div>
          </div>

          <div class="clearfix"></div>
          <div class="pagination-container">
            <nav class="pagination">
              <ul>
                <li><a href="#" class="current-page">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </nav>

            <nav class="pagination-next-prev">
              <ul>
                <li><a href="#" class="prev">Previous</a></li>
                <li><a href="#" class="next">Next</a></li>
              </ul>
            </nav>
          </div>
          <div class="clearfix"></div>
        </div>

        <side-bar :blogs="blogs" />
      </div>
    </div>
  </div>
  <div class="margin-top-55"></div>
</template>

<script>
import SideBar from "../../components/Blog/Sidebar.vue";
export default {
  components: {
    SideBar,
  },
  data: () => ({
    blogs: [
      {
        image: "images/blog-post-01a.jpg",
        title: "8 Tips to Help You Finding New Home",
        created_at: "Novemer 12, 2016",
        description:
          "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis.",
      },
      {
        image: "images/blog-post-02a.jpg",
        title: "Bedroom Colors You'll Never Regret",
        created_at: "Novemer 9, 2016",
        description:
          "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis.",
      },
      {
        image: "images/blog-post-03a.jpg",
        title: "What to Do a Year Before Buying Apartment",
        created_at: "Novemer 26, 2016",
        description:
          "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis.",
      },
    ],
  }),
};
</script>

<style>
</style>
