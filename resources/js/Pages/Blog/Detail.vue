<template>
  <teleport to="head">
    <title>Bedroom Colors You'll Never Regret | Xplorestate</title>
  </teleport>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Bedroom Colors You'll Never Regret</h2>
          <span>Keep up to date with the latest news</span>

          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
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
          <div class="blog-post single-post">
            <img class="post-img" src="/images/blog-post-02a.jpg" alt="" />

            <div class="post-content">
              <h3>Bedroom Colors You'll Never Regret</h3>

              <ul class="post-meta">
                <li>Novemer 9, 2016</li>
                <li><a href="#">5 Comments</a></li>
              </ul>

              <p>
                Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa.
                Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed
                augue. Curabitur quis lectus quis augue dapibus facilisis.
                Vivamus tincidunt orci est, in vehicula nisi eleifend ut.
                Vestibulum sagittis varius orci vitae.
              </p>

              <div class="post-quote">
                <span class="icon"></span>
                <blockquote>
                  Mauris aliquet ultricies ante, non faucibus ante gravida sed.
                  Sed ultrices pellentesque purus, vulputate volutpat ipsum
                  hendrerit sed neque sed sapien rutrum.
                </blockquote>
              </div>

              <p>
                In ut odio libero, at vulputate urna. Nulla tristique mi a massa
                convallis cursus. Nulla eu mi magna. Etiam suscipit commodo
                gravida. Cras suscipit, quam vitae adipiscing faucibus, risus
                nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue
                velit, tempus mattis dignissim nec, porta sed risus. Donec eget
                magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia
                tempor malesuada. Ut lacus sapien, placerat a ornare nec,
                elementum sit amet felis. Maecenas pretium lorem hendrerit eros
                sagittis fermentum.
              </p>
              <p>
                Phasellus enim magna, varius et commodo ut, ultricies vitae
                velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                sagittis vel justo. In libero urna, venenatis sit amet ornare
                non, suscipit nec risus. Sed consequat justo non mauris pretium
                at tempor justo sodales. Quisque tincidunt laoreet malesuada.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit
                est. Suspendisse sit amet mauris in quam pretium faucibus et
                aliquam odio.
              </p>

              <ul class="share-buttons margin-top-40 margin-bottom-0">
                <li>
                  <a class="fb-share" href="#"
                    ><i class="fa fa-facebook"></i> Share</a
                  >
                </li>
                <li>
                  <a class="twitter-share" href="#"
                    ><i class="fa fa-twitter"></i> Tweet</a
                  >
                </li>
                <li>
                  <a class="gplus-share" href="#"
                    ><i class="fa fa-google-plus"></i> Share</a
                  >
                </li>
                <li>
                  <a class="pinterest-share" href="#"
                    ><i class="fa fa-pinterest-p"></i> Pin</a
                  >
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </div>

          <ul id="posts-nav" class="margin-top-0 margin-bottom-40">
            <li class="next-post">
              <a href="#"><span>Next Post</span> Tips For Newbie Hitchhiker</a>
            </li>
            <li class="prev-post">
              <a href="#"
                ><span>Previous Post</span> What's So Great About Merry?</a
              >
            </li>
          </ul>

          <div class="clearfix"></div>
          <h4 class="headline margin-top-25">Related Posts</h4>
          <div class="row">
            <div class="col-md-6">
              <div class="blog-post">
                <a href="#" class="post-img">
                  <img src="/images/blog-post-02.jpg" alt="" />
                </a>

                <div class="post-content">
                  <h3><a href="#">Bedroom Colors You'll Never Regret</a></h3>
                  <p>
                    Nam nisl lacus, dignissim ac tristique ut, scelerisque eu
                    massa. Vestibulum ligula nunc, rutrum in malesuada vitae.
                  </p>

                  <a href="#" class="read-more"
                    >Read More <i class="fa fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="blog-post">
                <a href="#" class="post-img">
                  <img src="/images/blog-post-03.jpg" alt="" />
                </a>

                <div class="post-content">
                  <h3>
                    <a href="#">What to Do a Year Before Buying Apartment</a>
                  </h3>
                  <p>
                    Nam nisl lacus, dignissim ac tristique ut, scelerisque eu
                    massa. Vestibulum ligula nunc, rutrum in malesuada vitae.
                  </p>

                  <a href="#" class="read-more"
                    >Read More <i class="fa fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
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
        image: "/images/blog-post-01a.jpg",
        title: "8 Tips to Help You Finding New Home",
        created_at: "Novemer 12, 2016",
      },
      {
        image: "/images/blog-post-02a.jpg",
        title: "Bedroom Colors You'll Never Regret",
        created_at: "Novemer 9, 2016",
      },
      {
        image: "/images/blog-post-03a.jpg",
        title: "What to Do a Year Before Buying Apartment",
        created_at: "Novemer 26, 2016",
      },
    ],
  }),
};
</script>

<style>
</style>
