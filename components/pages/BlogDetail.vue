<template>
  <section class="commonSection blogDetails">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="single_blog">
            <div class="blog_thumb">
              <img src="/images/blog/7.jpg" alt="">
            </div>
            <div class="blog_headings">
              <span class="blog_date">20 nov</span>
              <h2>Become the best sale marketer</h2>
              <p class="blog_metas">
                <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>-<a href="#">2 Comments</a>
              </p>
            </div>
            <div class="blog_details">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
                passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
                first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
                therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose injected humour and the like.
              </p>
            </div>
            <div class="blog_tagitems">
              <span>Tags:</span><a href="#">Business</a>, <a href="#">Agency</a>, <a href="#">Digital</a>, <a href="#">Technology</a>
            </div>
            <div class="post_author">
              <img src="/images/blog/8.jpg" alt="">
              <h3><a href="#">Christine Eve</a></h3>
              <p>
                Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus.
              </p>
              <a href="#">View all posts</a>
            </div>
            <div class="comment_area">
              <h3>2 Comments</h3>
              <ol>
                <li>
                  <div class="single-comment">
                    <img src="/images/blog/9.jpg" alt="">
                    <div class="authorDetails">
                      <h5><a href="#">David Martin</a></h5>
                      <span>20 Nov, 2018   -   4:00 pm</span>
                    </div>
                    <div class="comment">
                      <p>
                        Lorem Ipsum is simply dummy text of the rinting and typesetting been the
                        industry standard dummy text ever sincer condimentum purus.
                        In non ex at ligula fringilla lobortis et not the aliquet.
                      </p>
                    </div>
                    <a class="common_btn red_bg" href="#"><span>Reply</span></a>
                  </div>
                </li>
                <li>
                  <div class="single-comment">
                    <img src="/images/blog/10.jpg" alt="">
                    <div class="authorDetails">
                      <h5><a href="#">Jessica Brown</a></h5>
                      <span>20 Nov, 2018   -   4:00 pm</span>
                    </div>
                    <div class="comment">
                      <p>
                        Lorem Ipsum is simply dummy text of the rinting and typesetting been the
                        industry standard dummy text ever sincer condimentum purus.
                        In non ex at ligula fringilla lobortis et not the aliquet.
                      </p>
                    </div>
                    <a class="common_btn red_bg" href="#"><span>Reply</span></a>
                  </div>
                </li>
              </ol>
            </div>
            <div class="commentForm">
              <h3>Leave a Comment</h3>
              <form action="#" method="post">
                <div class="row">
                  <div class="col-lg-6">
                    <input required="" class="input-form" type="text" name="name" placeholder="Your Name">
                  </div>
                  <div class="col-lg-6">
                    <input required="" class="input-form" type="email" name="email" placeholder="Email Address">
                  </div>
                  <div class="col-lg-12">
                    <textarea required="" class="input-form" name="comment" placeholder="Write Message"></textarea>
                  </div>
                </div>
                <a class="common_btn red_bg" href="#"><span>Send Message</span></a>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4 sidebar">
          <aside class="widget search-widget">
            <form method="post" action="#" class="searchform">
              <input type="search" placeholder="Search here..." name="s" id="s">
            </form>
          </aside>
          <aside class="widget recent_posts">
            <h3 class="widget_title">Latest Posts</h3>
            <div class="meipaly_post_widget">
              <div class="mpw_item">
                <img src="/images/blog/11.jpg" alt="">
                <a href="#">basic rules of running web agency</a>
              </div>
              <div class="mpw_item">
                <img src="/images/blog/11.jpg" alt="">
                <a href="#">Introducing latest mopaly features</a>
              </div>
              <div class="mpw_item">
                <img src="/images/blog/13.jpg" alt="">
                <a href="#">become the best sale marketer</a>
              </div>
            </div>
          </aside>
          <aside class="widget categories">
            <h3 class="widget_title">Categories</h3>
            <div class="meipaly_categorie_widget">
              <ul>
                <li><a href="#">Business</a></li>
                <li><a href="#">Introductions</a></li>
                <li><a href="#">One Page Template</a></li>
                <li><a href="#">Parallax Effects</a></li>
                <li><a href="#">New Technologies</a></li>
                <li><a href="#">Video Backgrounds</a></li>
              </ul>
            </div>
          </aside>
          <aside class="widget">
            <h3 class="widget_title">Tags:</h3>
            <div class="meipaly_tagcloude_widget">
              <a href="#">Business,</a> <a href="#">Agency,</a> <a href="#">Digital,</a> <a href="#">Technology,</a>
              <a href="#">Parallax,</a> <a href="#">Innovative,</a> <a href="#">Professional,</a>
              <a href="#">Experience,</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "BlogDetail"
    }
</script>

<style scoped>

</style>
