import React from "react";
import './commonBase.css';

export default function CommonBase(){
    return(
        <div>
            <div className="base_container">
                <h2 className="base_title">Общая база знаний для студентов</h2>
                <img className="base_img" src="/img/base.svg" alt="" />
            </div>
            <div className="radio_box">
                <div className='answer-block'>
                    <form>
                        <div className="radio">
                            <div class="radio-item">
                                <input type="radio" id="ritema" name="ritem" value="ropt1" className='inpt'/>
                                <label for="ritema">Раздел  инфо</label>
                            </div>
                            <div class="radio-item">
                                <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                                <label for="ritemb">Раздел  инфо</label>
                            </div>
                            <div class="radio-item">
                                <input type="radio" id="ritemd" name="ritem" value="ropt3"/>
                                <label for="ritemd">Раздел  инфо</label>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div className='answer-block'>
                    <form>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}