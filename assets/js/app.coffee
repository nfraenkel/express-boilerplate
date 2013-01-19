$ ->
    play_sound = (midi_code) ->
        # Play the sound
        alert "Play #{midi_code}"

    $(window).on 'keydown', (e) ->
        console.log e.keyCode
        console.log e
        #Figure out what sound to play
        #call play_sound
