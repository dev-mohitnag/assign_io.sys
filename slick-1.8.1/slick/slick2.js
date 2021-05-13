        $(document).on('ready', function () {
            $(".center").slick({
                arrows: false,
                infinite: true,
                centerMode: true,
                autoplay:true,
                slidesToShow: 3,
                centerPadding: '0px',
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1
                        }
                    }
                ]

            });

        });
