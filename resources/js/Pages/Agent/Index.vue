<template>
<teleport to="head">
    <title>Real estate Agents | Xplorestate</title>
</teleport>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Agents</h2>
          <span>List of Our Agents</span>

          <nav id="breadcrumbs">
            <ul>
              <li><inertia-link :href="route('home')">Home</inertia-link></li>
              <li>Listings</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="main-search-input margin-bottom-40">
          <input
            type="text"
            class="ico-01"
            placeholder="Type an agent name or location"
            value=""
          />
          <button class="button">Search</button>
        </div>
      </div>

      <div class="col-md-12">
        <div class="row">
          <div class="agents-grid-container">
            <div
              v-for="(agent, index) in agents"
              :key="index"
              class="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <div class="agent">
                <div class="agent-avatar">
                  <inertia-link :href="route('agent.detail')">
                    <img :src="agent.image" alt="agent's profile" />
                    <span class="view-profile-btn">View Profile</span>
                  </inertia-link>
                </div>

                <div class="agent-content">
                  <div class="agent-name">
                    <h4>
                      <inertia-link href="route('agent.detail')">{{
                        agent.name
                      }}</inertia-link>
                    </h4>
                    <span>Agent In {{ agent.address }}</span>
                  </div>

                  <ul class="agent-contact-details">
                    <li>
                      <i class="sl sl-icon-call-in"></i>{{ agent.phone_number }}
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i
                      ><a href="#">{{ agent.email }}</a>
                    </li>
                  </ul>

                  <ul class="social-icons">
                    <li>
                      <a class="facebook" href="#"
                        ><i class="icon-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a class="twitter" href="#"
                        ><i class="icon-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a class="gplus" href="#"><i class="icon-gplus"></i></a>
                    </li>
                    <li>
                      <a class="linkedin" href="#"
                        ><i class="icon-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="clearfix"></div>
        <div class="pagination-container margin-top-20">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    agents: [
      {
        image: "images/agent-04.jpg",
        name: "Charles Watson",
        address: "Dallas",
        phone_number: "(123) 123-456",
        email: "charles@example.com",
      },
      {
        image: "images/agent-02.jpg",
        name: "Jennie Wilson",
        address: "New York",
        phone_number: "(123) 123-456",
        email: "jennie@example.com",
      },
      {
        image: "images/agent-03.jpg",
        name: "David Strozier",
        address: "Los Angeles",
        phone_number: "(123) 123-456",
        email: "david@example.com",
      },
      {
        image: "images/agent-01.jpg",
        name: "Melake Benti",
        address: "Addis Ababa",
        phone_number: "+251 912-34-4564",
        email: "david@example.com",
      },
    ],
  }),
};
</script>

<style>
</style>
