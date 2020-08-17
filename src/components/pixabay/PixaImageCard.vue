<template>
  <div class="container">
    <div class="card">
      <div class="img-box">
        <img
          src="http://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRX42AsvJz2kqHvnYClHiZdw"
          alt="javohir"
        />
      </div>
      <div class="content">
        <h2>Someone Famous <br /><span>Javohir Berdiyev</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod
          perferendis blanditiis ab? Nulla voluptate deleniti eius hic,
          perferendis.
        </p>
        <ul>
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pixabay-card {
  .card {
    position: relative;
    background: #ccc;
    overflow: hidden;
    border-radius: 10px;
    transition: 0.5s;

    &:hover {
      box-shadow: 0 1px 15px 4px rgba(123, 172, 255, 0.329);

      .img-box {
        opacity: 0.5;
      }

      img {
        width: 100%;
        text-align: center;
        height: 100%;
      }

      .content {
        bottom: 0;
      }
    }

    .img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.5s;
    }

    .content {
      position: absolute;
      width: 100%;
      height: 60%;
      bottom: -100%;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      transition: 0.54s;
    }
  }

  .card .card:hover .card:nth-child(1) .content {
    background: linear-gradient(0deg, #183188, transparent);
  }

  .card:nth-child(2) .content {
    background: linear-gradient(0deg, #00000075, transparent);
  }

  .card:nth-child(3) .content {
    background: linear-gradient(0deg, #ffffff9c, transparent);
  }

  .card:nth-child(4) .content {
    background: linear-gradient(0deg, #ffc31eab, transparent);
  }

  .card .content h2 {
    margin: 0 0 10px;
    padding: 0;
    color: #fff;
    font-size: 20px;
  }

  .card .content h2 span {
    color: #ffeb3b;
    font-size: 16px;
  }

  .card .content ul {
    display: flex;
    margin: 20px 0 0;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  .card .content ul li {
    list-style: none;
  }

  .card .content ul li a {
    color: #fff;
    padding: 0 10px;
    font-size: 18px;
  }

  .icon {
    background-color: #ffeb3b;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .icon .fa:nth-child(1) {
    font-size: 100px;
    position: absolute;
    top: 19%;
    left: -5%;
    color: rgba(255, 255, 255, 0.233);
  }

  .icon .fa:nth-child(2) {
    font-size: 100px;
    position: absolute;
    top: 19%;
    left: 102%;
    color: rgba(255, 255, 255, 0.233);
  }

  .icon .fa:hover {
    cursor: pointer;
  }

  p {
    color: #fff;
  }
}
</style>
