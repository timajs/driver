import React from 'react';
import css from './EduBase.module.scss';
import PageHeader from '../../components/PageHeader/PageHeader'
function EduBase() {
    return (
        <>
            <PageHeader />
            <div className={css.base}>
                <p className={css.title}>Общая база знаний для студентов</p>
                <img className={css.basePicture} src="/images/basePicture.svg" alt="" />
                <div className={css.info__lesson}>
                    <div className='answer-block'>
                        <form>
                            <div className={css.radio}>
                                <div class="radio-item">
                                    <input type="radio" id="ritema" name="ritem" value="ropt1" className='inpt' />
                                    <label for="ritema">Раздел  инфо</label>
                                </div>
                                <div class="radio-item">
                                    <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                                    <label for="ritemb">Урок №1</label>
                                </div>
                                <div class="radio-item">
                                    <input type="radio" id="ritemd" name="ritem" value="ropt3" />
                                    <label for="ritemd">Урок №1</label>
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className={css.radio}>
                                <div class="radio-item">
                                    <input type="radio" id="ritema" name="ritem" value="ropt1" className='inpt' />
                                    <label for="ritema">Раздел  инфо</label>
                                </div>
                                <div class="radio-item">
                                    <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                                    <label for="ritemb">Урок №2</label>
                                </div>
                                <div class="radio-item">
                                    <input type="radio" id="ritemd" name="ritem" value="ropt3" />
                                    <label for="ritemd">Урок №2</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EduBase;